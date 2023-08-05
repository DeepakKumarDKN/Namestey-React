// let createElement = document.createElement('h1')
// createElement.textContent = "Hello World"

// document.body.appendChild(createElement)

const parent = React.createElement(
    'div',
    {id:'parent'},
    [React.createElement('h1',{id:'nested_parent'}, 'Hello')]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)