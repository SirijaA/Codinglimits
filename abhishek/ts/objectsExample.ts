type User ={
   readonly _id:string
    name:string
    email:string
    isActive:boolean
}

let myUser:User={
    name:'abhi',
    email:'abhishek@gmail.com',
    isActive:true,
    _id:'1234'
}
// console.log(myUser)
type cardNumber={
    cardnumber:number
}
type cardDate ={
    carddate:string
}
type cardDetails=cardNumber & cardDate 

let carfullDetailes:cardDetails={
    cardnumber:1234567890,
    carddate:'12 may 2025',
}
console.log(carfullDetailes)

export {}