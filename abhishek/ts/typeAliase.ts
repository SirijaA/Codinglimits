type User={
    name:string;
    email:string;
    isPaid?:boolean
}
function printUser({name,email,isPaid}:User){
    console.log(name,email,isPaid)
}

printUser({
    name: "abhi",
    email: "abhi@gmail.com",
    
});



export {}