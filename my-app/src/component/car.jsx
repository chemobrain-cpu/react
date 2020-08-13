import React from "react"
//learning destructuring

const cars = [
    {
        model:"honda model3",

        colorsByPopularity:["black","silver"],
        speedStat:{
            topSpeed:150,
            zeroToSixty:8.5

        }

    },
    {
        model:"Telsa model3",
        colorsByPopularity:["red","whiter"],
        speedStat:{
            topSpeed:150,
            zeroToSixty:3.2
            
        }

    }
]

//object destructuring
let [
    honda
    ,telsa
] = cars


//destructuring to get alternative variable name to represent the property
let {model:hondaModel ="default value",colorsByPopularity:hondaColor ="default value",speedStat:hondaSpeed ="default value"} = honda

let {model:telsaModel="default value",colorsByPopularity:telsaColor="default value",speeedStat:telsaSpeed = "default value"} = telsa


//array destructuring
const arr = [
    ["arr11","arr12"],
    ["arr21","arr22"]
]


let [first="firstArr",second="secondArr"] = arr

//further destructuring the car object

let [honda,telsa] = cars

let {model:telsaModel,colorsByPopularity:telsaTopColor,speedStat:telsaSpeed} = telsa

let {model:hondaModel,colorsByPopularity:hondaTopColor,speedStat:hondaSpeed} = honda

let{topSpeed:telsaTopSpeed}  = telsaSpeed
let {topSpeed:hondaTopSpeed} = hondaSpeed



export default cars