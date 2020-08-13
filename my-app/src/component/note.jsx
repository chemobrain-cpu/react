import React from "react"

let Note = (prop)=>{
    const [display,setDisplay] = React.useState(false)
    let hide = ()=>{
        setDisplay(false)
    
    }
      let show = ()=>{
        setDisplay(true)
    
    }
    return(
        <div className =  "notes-container">
        {prop.contentdatastructure.map((content,index)=>{
        return (<div className = "note"
       onMouseOver =  {function(){
             show()
           }}
          onMouseLeave = {function(){
             hide()
           }}

   > 
      <h3 className = "note-heading">{content.title}</h3>
      <p className = "note-p">{content.note}</p>
      <button
      style =  {{display: display ?"inline-block" : "none"}}
      key = {index}
      onClick =  {function(){
           { prop.deleted(index)}
      }}
      >delete</button>
   
      </div>)})}
</div>
    )
}
export default Note

