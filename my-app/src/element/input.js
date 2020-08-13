import React from "react"



let Input = (prop)=>{
 
    return (
        <div className = "input">
         <input
        type = {prop.type} 
        placeholder = {prop.placeholder}
        style = {prop.style}
        
        className={prop.className}
        onChange = {prop.onChange}
        value = {prop.value}
      
        />
        
        
        </div>
    )

}
export default Input