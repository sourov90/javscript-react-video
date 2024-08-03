//example a indexOf array, check the element index number by using indexOf method
const peoplesName=['sourov','krishno','radha','gobindo']
// console.log(peoplesName.indexOf("krishno"))


// find method example bellow code line  
const numbers = [3,4,5,6,78,95]
const result= numbers.find(myFunction)

function myFunction(value,index,array){
    if(value>40){
        return(`The older number is a ${value}`)
    }
}
console.log(result)