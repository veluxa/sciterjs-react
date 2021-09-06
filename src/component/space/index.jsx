import React from "sciterjs-react";

const Space = (props) => {
    return props.children.map((child) => {
        return <>{child} <span style={{ width: 10 }} /></>
    })
}

export default Space;