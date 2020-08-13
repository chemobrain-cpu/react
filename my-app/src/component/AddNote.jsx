import React from "react"
import stuffToExportFromInputArea from "./inputArea"
import Note from "./note"
import InputArea from "./inputArea"

let AddNote = ()=>{
  //build your content datastructure
  let [contentdatastructure,setContentdatastructure] = React.useState([{title:"title",note:"take note"}])
   //setting state to represent the inputs content
  let [ input,setInput] = React.useState({title:"",note:""})

  //adding change event to the input area input in other to handle change event
  let change =(e)=>{
      if(e.target.name == "title"){
          let value = e.target.value
          setInput(prev =>{
              return {
                  title:value,
                  note:prev.note
              }})
            
      }
      else if(e.target.name == "note"){
          let value = e.target.value
          setInput(prev =>{
              return {
                  title:prev.title,
                  note:value
              }
          })
          
      }
  }
  //adding button click event in other to push the values of the input to our datastructure
  let buttonClick = (e)=>{
      pushToContentdatastructure()
      //making the input empty after pushing the input value to our datastructure
      setInput({title:"",content:""})
  } 
  let pushToContentdatastructure =()=>{
      setContentdatastructure(prev =>{
          return [...prev,input]
      })  
  }
    return (
    <div>
       <div className="addNotes">
    <InputArea 
        className = "inputArea" 
        input = {input}
        onChange = {change}
        onClick = {buttonClick}
 />
     </div>
     
    <Note 
        contentdatastructure = {contentdatastructure}
        deleted = { (index)=>{
               setContentdatastructure(prev =>{
                    return prev.filter((elem,i)=>{
                          return i !=index
        })
    })
  }}
/> 
</div>
)}
          
let stuffToExportFromAddNote = [AddNote]
export default stuffToExportFromAddNote