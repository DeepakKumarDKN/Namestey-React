// Creating it with the help of DOM

const heading = document.createElement('h1')
heading.innerHTML = "Namestey EveryOne"
// const root = document.getElementById('root').appendChild(heading)



// creating using pure react
 
const headingTwo = React.createElement(
    'div',
    {id:'title'},
    React.createElement('h1',{},'hello how are you Guys')
)


const headingThree = React.createElement(
    'div',
    {},
    React.createElement('h1',{id:'heading-one'},'Heading One'),
    React.createElement('h2',{id:'heading-two'},'Heading Two')
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(headingThree)


