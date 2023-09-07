import React from 'react'
import ReactDOM  from 'react-dom/client'
import ResturantLogo from '../Coding/src/Images/ResturantLogo.jpg'
import star from '../Coding/src/Images/star.png'



/**
 * Header
 * - logo
 * - nav-items
 * Body
 * - Search
 * - Resturant Container
 * - Resturant Card
 *      - Image 
 *      - Name Of The Restaurant
 *      - rating
 *      - Star Rating
 *      - Cuisine 
 * Footer
 * - Copyight
 * - Links
 * - Address
 * - Contact Information
 */


const Header = () => {
    return (
        <div className="header">
            <div className='logo_container'>
                <img className='logo' src={ResturantLogo}></img>
                <h1>Food Villa</h1>
            </div>
            <div className='nav_items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const ResturantCard = (props) => {
    return (
        <div className="res-card">
            <ul class="card_list_items">
                <li>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0984acc0ed7b914206dbbcb90297becc"/>
                    </li>
                <li>{props.name}</li>
                <li className="rating-box">
                    <img className="rating_image"src={star}></img>
                    Rating
                </li>
                <li>Cuisines</li>
                <li>Place: Tollygunge</li>
            </ul>
        </div>
    )
}

const Body = () => {
    return (
        <div className="Body maxWidth">
            <div className="search_bar">
                Search
            </div>
            <div className="resturant_container">
                <ResturantCard name = "Meghna Foods"/>
                <ResturantCard name = "KFC " />
               
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)