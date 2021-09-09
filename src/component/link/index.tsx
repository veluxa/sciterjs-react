import React from "sciterjs-react";
import { route } from 'preact-router';

let currentUrl = "/"

const Link = (props: { href: any; children?: any; }) => {

    const onLinkClick = (e) => {
        e.stopPropagation()
        const href = e.currentTarget.attributes["href"]

        if (href !== currentUrl) {
            currentUrl = href
            route(currentUrl)
        }
    }

    return (
        <a href={props.href} class="app-link" onClick={onLinkClick}>{props.children}</a>
    )
}

export default Link;