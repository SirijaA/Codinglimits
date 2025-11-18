class User{
    private _courseCount=1
    readonly city:string='jaipur'
    constructor(public name:string, public email:string){}

    get getAppleElement():string{
        return `apple${this.email}`
    }

    get courseCount(){
            return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error('course counts hould be more than 1')
        }
        this._courseCount=courseNum
    }

}
const abhi = new User('abhi','@apple.com')
console.log(abhi.getAppleElement)
console.log(abhi.courseCount)
console.log(abhi.courseCount=20)

console.log(abhi.courseCount)