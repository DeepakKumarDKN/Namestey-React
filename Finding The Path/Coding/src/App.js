import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './Component/Header'
import Body from './Component/Body'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Error from './Component/Error'



const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children :[
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            }
        ],
        errorElement : <Error />

    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router= {appRouter}/>)