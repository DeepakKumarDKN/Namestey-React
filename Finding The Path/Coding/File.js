const name = "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split"
const title = "/1234/"

//console.log(`${name}${title}`)

const arrayOne = [0,1,2,3,4,5,6,7,8,9,10]
//arrayOne.splice(0,4,11,13)
//console.log(arrayOne)


arrayOne.splice(-12,0,'deepak')

//const myn1 = arrayOne.slice(1,3)
//const myn2 = arrayOne.splice(1,3)
//console.log(myn1)
//console.log(arrayOne)
//console.log(myn2)
//cls
console.log(arrayOne)


const marvel_heroes = ['thor','Ironman','spiderMan']
const ramayanHeros = ['ram','laxman','hanuman','narayan']

//marvel_heroes.push(ramayanHeros)
//console.log(marvel_heroes)
//const allHeros = [...marvel_heroes, ...ramayanHeros]
//console.log(Array.from('Hitesh')) 
//console.log(Array.isArray(allHeros))     


                                                                                                                                                                                                                                   

const addNumbers = function(a,b){
    return a+b 
}

//console.log(addNumbers(10,20))

let a;
if(true){
    a =  20 
    let b = 20;
}

//console.log(a)

function One(){
    const userName = "deepak"

    function Two(){
        const fullName = "deepak kumar nayak"
        console.log(userName)
        console.log(fullName)
        
    }
    // console.log('Accesing from Outer',userName)
}
// One()

//console.log(this)

// functions 

// function Declaration

function FindIndex(num,target){
    for(let i of num){
        if (i === target){
            //console.log(num.indexOf(i))
        }
    }
}
FindIndex([10,20,30,40,50], 20)
 
//functions Expression 

const FindIndexof = function(num, target){
    for(let i=0; i<=num.length; i++){
        if(num[i] === target){
            return i
        }
    }
}
console.log(FindIndexof([10,20,30,40], 20))

// Arrow Functions

const findTheIndexOf = (num,target)=>{
    for(let i=0; i<=num.length; i++){
        if(num[i] === target){
            return i
        }
    }
}

console.log(findTheIndexOf([10,20,30,40],30))