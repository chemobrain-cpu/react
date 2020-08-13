import React from 'react';
import './App.css'
import Card from "./components/card"
import Head from "./components/header"
import Avatar from "./components/styles/avatar"

let contacts = [
  {
    id:1,
    url:"https://z-m-scontent.fbni1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/109298690_155857526035167_7666883450608859438_n.jpg?_nc_cat=107&_nc_sid=85a577&efg=eyJpIjoibyJ9&_nc_eui2=AeGQmEkSHSNp2n07oUGc06UJNC6QrjY6R840LpCuNjpHzjUscV6DzMhQFyr0eVVQYZISxvvKKl8h0BJh7JlxDrpw&_nc_ohc=U_y3dTg-np0AX_scn_L&_nc_ad=z-m&_nc_cid=1361&_nc_eh=fe8353160dd81fac3db7ad90d9cc8ec9&_nc_ht=z-m-scontent.fbni1-1.fna&tp=14&oh=da47e0310f47fa0d6c53332bfd67e8b9&oe=5F3DF599",
  name:"james",
  number:"090",
  email:"james@gmail.com"
  }
  ,{
    id:2,
  url:"https://z-m-scontent.fbni1-2.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/105565797_106795664421794_8131427243970641026_o.jpg?_nc_cat=100&_nc_sid=85a577&efg=eyJpIjoibyJ9&_nc_eui2=AeFRjBw9FAAIo_Dt6cD--32Pvy-JI0sLm8u_L4kjSwuby-ycoLD1QG3uNWgxm_fyzrh9CfPCeDFitqxpx1KBLd8S&_nc_ohc=RLUHnF5mSDsAX-8Nocy&_nc_ad=z-m&_nc_cid=1361&_nc_eh=fe8353160dd81fac3db7ad90d9cc8ec9&_nc_ht=z-m-scontent.fbni1-2.fna&tp=14&oh=a6868b815c175430d0e9dc9d21af2f4b&oe=5F3CF7E5",
  name:"faith",
  number:"090",
  email:"faith@gmail.com"
   }
  ]
  let createCard = (contact) =>{
    return (
          <Card
    key = {contact.id}
    name = {contact.name}
    img = {contact.url}
    number = {contact.number}
    email = {contact.email}
    />

    )
  }


function App() {
  return (
  <div>
   <Head
    className = "head"
    />
  {contacts.map((e)=>{
    return createCard(e)

  })}

  </div>
  );
}





export default App;

/*
   <div >
    <Head
    className = "head"
    />
    <Avatar imgSource={img[0].url} />
    <br />
    <br />

    <Card
    className = "card"
    name ={img[0].name}
    img ={img[0].url}
    number = {img[0].number}
    email = {img[0].email}
    />
     
     <br />
     <br />
    <Card
    className = "card"
    name ={img[1].name}
    img ={img[1].url}
    number = {img[1].number}
    email = {img[1].email}
    />

    </div>

*/

/*map,filter,reduce,find,findIndex

const number = [1,2,3,4,5]
const newArr = number.filter((e)=>{
  return e > 3
})
//alert(newArr)
let total = number.reduce((count,element) =>{
  return count + element

})
//alert(total)
//returns the first member that passes a test
let index = number.find((e)=>{
      return e> 4
})
alert(index)

let index2 =  number.findIndex((e)=>{
  return e> 4
})
alert(index2)
*/
















