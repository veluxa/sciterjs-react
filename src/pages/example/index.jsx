import React from "sciterjs-react";
import Button from '../../component/button';
import external from '../../external'

const Example = () => {

    return (
        <div>
            <div>Example page</div>
            <Button onClick={() => {
                external.call("hi", "sciterjs-react")
            }}>Call aardio external</Button>
        </div>
        
    )
}

export default Example;