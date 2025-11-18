function A<T>(val:T[]):T[]{
    return val
}
// function A<T>(val:T):string{
//     return 'hello'
// }


console.log(A<number>([1,2,3,4,5]))

class Box<T>{
    constructor(
        public content:T
    ){
        this.content=content;
        console.log(content)
    }

}

const abhi=new Box<string>("hello")