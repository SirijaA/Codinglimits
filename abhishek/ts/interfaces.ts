interface User{
    readonly dbId:number
    email:string
    userId:number
    googleId?:string
    //startTrail:()=>string
    startTrail():string
    getCoupon(couponname:string,value:number):number
}

let user:User={
    dbId:22,
    email:'abhi@gmail.com',
    userId:10403,
    startTrail(){
        return 'hello'
    },
    getCoupon(name,off){
        return off
    }
}
console.log(user.getCoupon('abhi',20))