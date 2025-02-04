// Event loop - 

console.log(1)
setTimeout(()=> {
    console.log(2)
},3000)
console.log(3)
setTimeout(()=>{
    console.log(4)
}, 1000)
setTimeout(()=>{
    console.log(5)
}, 5000)



// 1
// 3
// 2