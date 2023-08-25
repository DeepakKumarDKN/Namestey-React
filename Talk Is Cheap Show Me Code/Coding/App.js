import React from 'react'
import ReactDOM  from 'react-dom/client'
import Star from './Star.png'

const Header = () =>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="/>
            </div>
            <div className="nav_items">
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

const BestOffers = () =>{
    return(
        <div className="best_offers">
            <h2 className="best-offers-heading">Best Offers For You</h2>
            <div className="offers_image_containers">
                <div className="offers_image_one">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2090c26dac216cc4be42453c57f2bd24"></img>
                </div>
                <div className="offers_image_one">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/6bce893ef5a19d69c35af0d9ea56d336"></img>
                </div>
                <div className="offers_image_one">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/dd4ea3cf8df3cf3b83e601c9f3407350"></img>
                </div>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return(
        <div className='res_card'>
            <div className="card_one">
                <img className="image_one" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"/>
                <p className="food_name">Pizza Hut</p>
                <p className="rating">
                    <img className= "star" src={Star} />
                    <p>4.1</p>
                </p>
                <p className="items_name">Fast Food, Pizzas</p>
                <p className="Location">Netaji Nagar</p>
            </div>
            <div className="card_one">
                <img className="image_one" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0984acc0ed7b914206dbbcb90297becc"/>
                <p className="food_name">Wow! Momo</p>
                <p className="rating">
                    <img className= "star" src={Star} />
                    <p>4.3</p>
                </p>
                <p className="items_name">Tibetian, Healthy Food Asian</p>
                <p className="Location">Tollygunge</p>
            </div>
            <div className="card_one">
                <img className="image_one" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sxjyupdgbmh0gfookx9l"/>
                <p className="food_name">Dominos Pizza</p>
                <p className="rating">
                    <img className= "star" src={Star} />
                    <p>4.1</p>
                </p>
                <p className="items_name">Pizzas, Italian, Dessert </p>
                <p className="Location">Paschim Putiary</p>
            </div>
            <div className="card_one">
                <img className="image_one" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"/>
                <p className="food_name">Subway</p>
                <p className="rating">
                    <img className= "star" src={Star} />
                    <p>4.1</p>
                </p>
                <p className="items_name">Fast Food, Healthy, Salad</p>
                <p className="Location">Regent Park</p>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className= "Body">
            <div className="search_bar">
                <input type="text" placeholder="Search"/>
                <button type="submit" className="submit_button">Submit</button>
            </div>

            <BestOffers />

            <div className='RestaurantContainer'>
             <h1 className="top_res">Top resturants chains in Kolkata</h1>   
            <RestaurantCard />
            </div>
        </div>
    )
}





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