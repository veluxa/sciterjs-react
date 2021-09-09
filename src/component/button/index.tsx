import React from "sciterjs-react";

const Button = (props) => {
    return <div style={{ display: 'inline-block', textAlign: 'center', behavior: "customEvent clickable", cursor: "pointer", userSelect: "none", backgroundColor: "white", padding: "5px 10px", color: "black", borderRadius: "2px", ...props.style }} onClick={e => {
        props.onClick.call(this, e);
        e.stopPropagation();
    }}>{props.children}</div>
}

export default Button;