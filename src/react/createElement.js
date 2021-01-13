import {
	VELEMENT,
	VSTATELESS,
	VCOMPONENT
} from './constant'
import { createVnode } from './virtual-dom'

// 第一个核心api 构建虚拟dom的object
export default function createElement(type, props, ...children) {
	let vtype = null
	if (typeof type === 'string') {
		vtype = VELEMENT
	} else if (typeof type === 'function') {
		if (type && type.isReactComponent) {
			vtype = VCOMPONENT
		} else {
			vtype = VSTATELESS
		}
	} else {
		throw new Error(`React.createElement: unexpect type [ ${type} ]`)
	}

	let key = null
	let ref = null
	let finalProps = {}
	if (props != null) {
		for (let propKey in props) {
			if (!props.hasOwnProperty(propKey)) {
				continue
			}
			if (propKey === 'key') {
				if (props.key !== undefined) {
					key = '' + props.key
				}
			} else if (propKey === 'ref') {
				if (props.ref !== undefined) {
					ref = props.ref
				}
			} else {
				finalProps[propKey] = props[propKey]
			}

			if (propKey === "onClick") {
				let behavior = props.style ? props.style.behavior || null : null
				if (!behavior && type !== "button") {
					props.style = props.style || {}
					props.style.behavior = "clickable"
				} else if (behavior.indexOf("clickable") < 0) {
					props.style = props.style || {}
					props.style.behavior = "clickable " + behavior
				}
			}
		}
	}

	finalProps.children = children

	return createVnode(vtype, type, finalProps, key, ref)
}

