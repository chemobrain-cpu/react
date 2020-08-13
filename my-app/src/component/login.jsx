import React from "react"
import Input from "../element/input"
 let inputContent = [
    {
        id:1,
        type : "text",
        placeholder : "Username"
    },
    {   id:2,
        type : "text",
        placeholder : "Password"
    },
    {   id:3,
        type : "text",
        placeholder : "Register"
    },
]







let Login = ()=>{
    let time
    let hideButton
    let showButton
    let   [state,set] =  React.useState(time)
    let [hide,setHide] = React.useState("null")
    let [background,setBackground] = React.useState(false)
    let [changeInput,setChangeInput] = React.useState({
        username:"",
        password:"",
        register:""
    })
    let [header,setHeader] = React.useState({
        firstName:"",
        secondName:"",
        thirdName:""
    })
    
    
    let getTime = function(){
    time = new Date().toLocaleTimeString()
    
    }
    getTime()
        
  
    let modifyTime = ()=>{
        setInterval(function(){
            time = new Date().toLocaleTimeString();
            set(time) 
            },1000) 
     
    }
    modifyTime()

    //function to make time blurr
    let blurr = ()=>{
        //declare a state
        setHide("none")
        setBackground(true)
    }
    let onBlurr = ()=>{
        setHide("block")
        setBackground(false)
        
    }
    let submit = (e)=>{
         e.preventDefault()

   
         
    }
    let value1 
    let value2
    let value3
    let change = (e)=>{
        if(e.target.placeholder == "Username"){
            value2 = header.secondName
            value3 = header.thirdName
            setHeader({
                firstName:e.target.value,
                secondName:value2,
                thirdName:value3
            })
            
        }else if(e.target.placeholder == "Password"){
            value1 = header.firstName
            value3 = header.thirdName
            setHeader({
                firstName:value1,
                secondName:e.target.value,
                thirdName:value3
            })
           
        }else if(e.target.placeholder == "Register"){
            value1 = header.firstName
            value2 = header.secondName
              setHeader({
                firstName:value1,
                secondName:value2,
                thirdName:e.target.value
        })

        }
    }
       
     /*
        let loginContainerChildren = e.target.parentElement.children
        loginContainerChildren = Array.from(loginContainerChildren)
        let new_arr = loginContainerChildren.slice(1,4)
        var usernameInput = ( new_arr[0].children[0].children)
        usernameInput = Array.from(usernameInput) 
        setValue(usernameInput[0].value) 
        */

    let createInput = (inputContent)=>{
        return (
            <Input 
            key={inputContent.id}
            type = {inputContent.type}
            placeholder = {inputContent.placeholder}
            className="input-element"
            onChange = {change}
            style={{backgroundColor:background? "red":"rgba(80, 77, 77,0.6)"}}
        
        />
        )
    }
        
    return (
        <div className = "login-container">
        <h4>welcome {header.firstName}  {header.secondName} </h4>
        <p>{header.thirdName}</p>
        <form onSubmit = {submit} >
        {inputContent.map(createInput)}
        <button onMouseOver = {blurr} 
         onMouseLeave={onBlurr}
        
      >submit</button>

        </form>
    
        <p style={{display:`${hide}`}}>{state}</p>
        
        
        
        </div>
    )
}

export default Login

//username input element
//password input element

