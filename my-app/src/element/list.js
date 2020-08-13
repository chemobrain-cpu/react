import React from "react"

let List = (prop)=>{
    const [isdone,setIsdone] = React.useState(false)
 

    return (
        <li className = {prop.className}
        key = {prop.key}
        id = {prop.id}
        onClick = {prop.onClick}
        style = {prop.style}
   
    
        >{prop.content}</li>
    )
}




export default List