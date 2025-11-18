// class User{
//     email:string
//     name:string
//     constructor(name:string,email:string){
//         this.email=email;
//         this.name=name;
//     }
// }



class User{
    // email:string
    // name:string
    constructor(public name:string, public email:string,private userId:string){
        this.email=email;
        this.name=name;
        this.userId=userId
    }
}

const abhi=new User('abhi','abhi@mn.com','12233')
console.log(abhi.email,abhi.name)