import React from "react"

let InputArea = (prop)=>{
  //function to create hover effects in the input Area
let hideInputArea =()=>{
  setDisplayInputArea(false)

}
let showInputArea = ()=>{
  setDisplayInputArea(true)

}
 //setting state to handle the hide and show of input area(titleinput and button)
 const [displayInputArea,setDisplayInputArea] = React.useState(false)



    return (
        <div className = {prop.className}
        onMouseLeave = {function(){
            hideInputArea()
        }}
        onMouseOver =  {function(){
            showInputArea()
        }}>
          <form >
            <input 
            type =  "text"
            name= "title" 
            placeholder =  "title"
            style = {{display: displayInputArea ?"inline-block" : "none"}}
            onChange ={prop.onChange}
            value  = {prop.input.title}>
            </input><br></br>

            <input
             type = {prop.type}
             name = "note"
             placeholder =  "take a note"
             onChange ={prop.onChange} 
             value ={prop.input.note}>
             </input><br></br> 
          </form>
          <button onClick = {prop.onClick}
             style = {{display: displayInputArea ?"inline-block" : "none"}}>+</button>
        </div>
        
    )
    
}
export default InputArea

