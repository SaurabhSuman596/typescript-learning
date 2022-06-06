// TYPE

let b: number=1
let c: string="saurabh"
let d: null=null
let e: any=[1,2]
let f:symbol= Symbol("h1")
let g:undefined
let h:boolean=true
let i:number[]=[1,2,5]
let j:[number,string,number[]]=[2,"saurabh",[2,4]]
let k:{name:string,age:number}={
    name:"saurabh",
    age:18
}
enum newEnym{
    red,
    blue,
    green
}

let mufunc=(a:number,b:number):number=>{
    return a+b
}

let l:void
let m:never

console.log(b,c,d,e,f,g,h,i,j,k,newEnym.red,mufunc(1,2),l)