// Creating it with the help of DOM

const heading = document.createElement('h1')
heading.innerHTML = "Namestey EveryOne"
// const root = document.getElementById('root').appendChild(heading)



// creating using react
 
const headingTwo = React.createElement(
    'div',
    {id:'title'},
    React.createElement('h1',{},'hello how are you Guys')
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(headingTwo)
