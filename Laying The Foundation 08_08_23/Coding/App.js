import React from 'react'
import ReactDom from 'react-dom/client'

const create_element = React.createElement(
    'div',
    {class:'header'},
    [React.createElement('h1',{},'Namestey React')],
    React.createElement(
        'ul',
        {},
        React.createElement('li',{},'Coursename: Namestey React'),
        React.createElement('li',{},'Mentor Name: Akshay Saini'),
        React.createElement('li',{},'Course Fees: 2100')
    )

)

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(create_element)