const superHeros :number[]=[]
// for(let i=0;i<10;i++)
//     superHeros.push(i)
// console.log(superHeros)

const heroPowers:Array<number>=[]
for(let i=0;i<10;i++)
    heroPowers.push(i)
console.log(heroPowers)

type User={
    name : string;
    isActive:boolean
}

const allUsers: User[] =[]

allUsers.push({name:'abhi',isActive:true})
allUsers.push({name:'amulya',isActive:false})
console.log(allUsers[1].name)
console.log(allUsers)
export {}
