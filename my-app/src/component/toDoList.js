import Heading3 from "../element/heading3"
import Input from "../element/input"
import Button from "../element/button"
import List from "../element/list"
import React from "react"
let count = 0

/*
when input gets changed,something to hold that temporal value,
onclicking,thet temporal value gets added to the set dataStructure 
*/




let v

let ToDoList = ()=>{
  //set datastructure
let [inputValue,setInputValue] = React.useState("")

 let [datastructure,setdatastructure] = React.useState([])
 let [isClicked,setIsClicked] = React.useState(false)
  //variable to hold temporary values



    let clickButtton = (e) =>{
      
     
      setdatastructure((previous)=>{
        return [...previous,inputValue]
      })
    //now empty the input text
    setInputValue("")
    }
  
    let changeInput = (e)=>{
      setInputValue(e.target.value)       
}
let deleteItem = (id)=>{
  setdatastructure(previous =>{
    return previous.filter((el,index)=>{
      return index != id

    })
  })
}




  return (
    <div className="to-do-list">
    <Heading3 
      className = "list-header"
    />
    <Input  className="to-do-list-input"
       onChange = {changeInput}
       value = {inputValue}
    /><Button 
      className = "add-btn"
      onClick = {clickButtton}
    />
    <ol className = "list-container">
       {datastructure.map((e,index)=>{
    return (<List
        key = {index}
        id =  {index}
        content = {e}
        className = "list-items"
        onClick = {function(){
          deleteItem(index)
          
        }}
        
        
   
      />
    )})}
  
    </ol>
    </div>
  )
}

export default ToDoList;