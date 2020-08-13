import React from "react"

let Button = (prop)=>{
    return (
        <button className={prop.className}
        onClick = {prop.onClick}>Add</button>
    )
}
export default Button