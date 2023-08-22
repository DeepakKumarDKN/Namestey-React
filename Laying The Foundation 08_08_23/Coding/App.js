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


// How to create an JSX 

const CourseComponent = () =>(
    <>
        <h1>💙 Namestey React 💛</h1>
        <ul>
            <li>Course Name: Namestey React</li>
            <li>Mentor Name: Akshay Saini</li>
            <li>Course Fee: 2100</li>
            <li> <a href="https://namastedev.com/namaste-react/">Website Link</a></li>
        </ul>
    </>
)


// React Functional Component 

const HeadingComponent = () =>(
        <>
            <CourseComponent />
            <h1 className = "functional_component">Functional Component 🧡</h1>
            <p>Look at the code file to see how functional Componet is written</p>

        </>
    )

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)