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

marvel_heroes.push(ramayanHeros)
//console.log(marvel_heroes)
const allHeros = [...marvel_heroes, ...ramayanHeros]
//console.log(Array.from('Hitesh')) 
//console.log(Array.isArray(allHeros))     

                                                                                                                                                                                                                                   


