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
        <h1 style={{fontFamily:'Poppins'}}>💙 Namestey React 💛</h1>
        <ul>
            <li style={{fontFamily:'Poppins'}}>Course Name: Namestey React</li>
            <li style={{fontFamily:'Poppins'}}>Mentor Name: Akshay Saini</li>
            <li style={{fontFamily:'Poppins'}}>Course Fee: 2100</li>
            <li style={{fontFamily:'Poppins'}}> <a href="https://namastedev.com/namaste-react/">Website Link</a></li>
        </ul>
    </>
)


// React Functional Component
// Component Composition

const HeadingComponent = () =>(
        <>
            <CourseComponent />
            <h1 className = "functional_component">Functional Component 🧡</h1>
            <p>Look at the code file to see how functional Componet is written</p>

        </>
    )

const MessageComponent = (
    <h1 style= {{fontFamily:'Poppins'}}>Course is Good Got To Know a Lot Of Things </h1>
)

const Heading = () =>  {
    return (
    <div className = "title">
        <CourseComponent />
        {MessageComponent}
        <h1 style= {{color : 'black', fontFamily: "Poppins"}}>This is h1 Tag 💛</h1>
        <h2 style = {{color : "red", fontFamily: "Poppins"}}>This is h2 Tag 🧡</h2>
        <h3 style= {{color : 'blue', fontFamily: "Poppins"}}>This is h3 Tag 💙</h3>
    </div>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Heading/>)