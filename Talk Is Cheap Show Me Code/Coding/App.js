import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './src/Component/Header.js'
import Body from './src/Component/Body.js'
import DownloadComponent from './src/Component/DownloadComponent.js'
import FooterComponent from "./src/Component/FooterComponent.js"


const AppLayout = () => (
    <>
        <Header/>
        <Body/>
        <DownloadComponent/>
        <FooterComponent/>
    </>
)



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)