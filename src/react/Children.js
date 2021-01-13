import { VELEMENT, VSTATELESS, POOL_SIZE } from "./constant";
import { isValidElement, cloneAndReplaceKey, getElementKey } from './ReactElement';
import { getIteratorFn, invariant } from "./util";

const SEPARATOR = '.';
const SUBSEPARATOR = ':';
const traverseContextPool = [];

function mapChildren(children, func, context) {
    if (children === null) {
        return children
    }

    const result = []

    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {

    let escapedPrefix = '';
    if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }

    const traverseContext = getPooledTraverseContext( // 从对象池中获取一个当前处理上下文对象
        array,
        escapedPrefix,
        func,
        context
    );
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);  // 开始处理 children
    releaseTraverseContext(traverseContext); // 处理完毕后将 traverseContext 返还给对象池
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    const { result, keyPrefix, func, context } = bookKeeping;

    let mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) { // 如果执行用户自定义的回调返回值还是数组的话，就再次将数组解析，直到 children 是单个的 react 合法元素 
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, c => c);
    } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix +
                (mappedChild.key && (!child || child.key !== mappedChild.key)
                    ? escapeUserProvidedKey(mappedChild.key) + '/'
                    : '') +
                childKey,
            );
        }
        result.push(mappedChild);
    }
}

function getPooledTraverseContext(
    mapResult,
    keyPrefix,
    mapFunction,
    mapContext,
) {
    if (traverseContextPool.length) { // 如果对象池中有已经存在的对象，则直接此次处理的 children 数组的基本信息记录在 traverseContext 对象中
        const traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
    } else {  // 如果不存在则创建
        return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0,
        };
    }
}

function releaseTraverseContext(traverseContext) {
    traverseContext.result = null;
    traverseContext.keyPrefix = null;
    traverseContext.func = null;
    traverseContext.context = null;
    traverseContext.count = 0;
    if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
    }
}


function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
        return 0;
    }

    return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

function traverseAllChildrenImpl(
    children,
    nameSoFar,
    callback,
    traverseContext,
) {
    const type = typeof children;

    // 从这里看出，children 不能是 boolean 和 undefined
    if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
    }

    let invokeCallback = false;

    if (children === null) {
        invokeCallback = true;
    } else {
        switch (type) {
            case 'string':
            case 'number':
                invokeCallback = true;
                break;
            case 'object':
                switch (children.vtype) {
                    case VELEMENT:
                    case VSTATELESS:
                        invokeCallback = true;
                }
        }
    }

    if (invokeCallback) {
        callback( // 所有子组件最终解析归宿，都会走进这个分支 mapSingleChildIntoContext === callback
            traverseContext,
            children,
            // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows.
            nameSoFar === '' ? SEPARATOR + getElementKey(children, 0) : nameSoFar,
        );
        return 1;
    }

    let child;
    let nextName;
    let subtreeCount = 0; // Count of children found in the current subtree.
    const nextNamePrefix =
        nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

    // console.log("children:",children);

    if (Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += traverseAllChildrenImpl(
                child,
                nextName,
                callback,
                traverseContext,
            );
        }
    } else {
        callback(
            traverseContext,
            children,
            nameSoFar === '' ? SEPARATOR + children.key : nameSoFar,
        );
        subtreeCount += 1;
    }

    return subtreeCount;
}

function escapeUserProvidedKey(text) {
    return text.replace(/\/+/g, '$&/');
}

function countChildren(children) {
    let n = 0;
    mapChildren(children, () => {
        n++;
        // Don't return anything
    });
    return n;
}

function forEachChildren(
    children,
    forEachFunc,
    forEachContext,
) {
    mapChildren(
        children,
        function () {
            forEachFunc.apply(this, arguments);
            // Don't return anything.
        },
        forEachContext,
    );
}

function toArray(children) {
    return mapChildren(children, child => child) || [];
}

export {
    forEachChildren as forEach,
    mapChildren as map,
    countChildren as count,
    toArray
}