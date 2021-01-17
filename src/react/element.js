import { VELEMENT } from "./constant";
import createElement from "./createElement";

export function isValidElement(object) {
    return (
        typeof object === 'object' &&
        object !== null &&
        object.vtype === VELEMENT
    );
}

export function cloneAndReplaceKey(oldElement, newKey) {
    const newElement = createElement(
        oldElement.type,
        { ...oldElement.props, key: newKey },
        oldElement.props.children
    )

    return newElement;
}

export function getElementKey(element, index) {
    // Do some typechecking here since we call this blindly. We want to ensure
    // that we don't block potential future ES APIs.
    if (typeof element === 'object' && element !== null && element.key != null) {
        // Explicit key
        return escape('' + element.key);
    }
    // Implicit key determined by the index in the set
    return index.toString(36);
}