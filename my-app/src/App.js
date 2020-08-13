import React from 'react';
import Header from "./component/header"
import stuffToExportFromNote from "./component/note"
import Footer from "./component/footer"
import contents from "./content/notecontent"
import Login from "./component/login"
import ToDoList from "./component/toDoList"
import "./styles.css/app.css"
import stuffToExportFromAddNote from "./component/AddNote"
let [AddNote,] = stuffToExportFromAddNote
let count = 0

let App = ()=>{
        


   return (
    <div className = "container">
      <Header />
      <AddNote />
   
     <Footer />

    </div> 
  )
}

/*

let App = ()=>{

  return (
    <ToDoList />
  )
}
*/





export default App;
//login component
//logout component
//various input element








/*if(isLoggedIn){
  return (
    <div className = "container">
    <Header />
    
  
  </div>)
}else{
  return (
  <div className = "container">
  <Header />
<h3>you are currently not logged in</h3>
</div>
)

}
*/


/*

let strikeThrough = {textDecoration:"line-through"}
let isLoggedIn = true
let App = ()=>{
  
 
  
  return (
 
  <div className = "container">
  <Header />
  {isLoggedIn? <Login /> :<h3 style={!isLoggedIn?strikeThrough:null}>you are currently not logged in</h3>}
  
  </div>
  )
 
}
*/


