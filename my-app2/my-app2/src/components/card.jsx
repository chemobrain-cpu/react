import React from "react"
import "./styles/card.css"
import Avatar from "./styles/avatar"
import Paragraphs from "../element/paragraph"


let Card = (pops)=>{
    return (
        
               <div className = " card"> 
           <h2 className = "card-header">{pops.name} </h2>
           <Avatar imgSource={pops.img} />
          
           <Paragraphs 
           content={pops.number}/>
           
            <Paragraphs 
           content={pops.email} />

        </div>

        //once entered all attributes as an array,depending on the array,produce paragraphs

        
            
    

        
     
        
    )
}
export default Card