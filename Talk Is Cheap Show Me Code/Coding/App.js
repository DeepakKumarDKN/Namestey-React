import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './Component/Header.js'
import Body from './Component/Body'


const Heading = () => (
    <>
        <Header/>
        <Body/>
        
        <h1 className="heading"> 🧡Episode 4: Talk is Cheap Show Me Your Code 💛</h1>
        <h1 className="heading">Food App</h1>
    </>
)



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading/>)