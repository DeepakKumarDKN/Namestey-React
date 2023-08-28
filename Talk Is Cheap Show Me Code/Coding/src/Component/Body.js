import AllResturant from "../Utils/Resturant"
import BestOffers from "./BestOffer"
import FilterComponent from "./FilterComponent"
import RestaurantCard from "./ResturantCard"
import ResturantWithOnlineDelivery from "./ResturantWithOnlineDelivery"

const Body = () => {
    return(
        <div className= "Body maxWidth">
            <div className="search_bar">
                <input type="text" placeholder="Search"/>
                <button type="submit" className="submit_button">Submit</button>
            </div>

            <BestOffers />

            <div className='Restaurant'>
                <h2 className="top_res">Top resturants chains in Kolkata</h2>  
                <div className="resturant_container">
                <RestaurantCard 
                foodname="Pizza Hut" rating="4.1" 
                itemname="Fast Food, Pizzas" location="Netaji Nagar" 
                imageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"/>

                <RestaurantCard 
                foodname="Wow! Momo" rating="4.3" 
                itemname="Tibetian, Healthy Food Asian" location="Tollygunge"
                imageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0984acc0ed7b914206dbbcb90297becc"/>

                <RestaurantCard 
                foodname="Dominos Pizza" rating="4.8" 
                itemname="Pizzas, Italian, Dessert" location="Paschim Putiary" 
                imageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sxjyupdgbmh0gfookx9l"/>

                <RestaurantCard 
                foodname="Subway" rating="4.3" 
                itemname="Fast Food, Healthy, Salad" location="Regent Park" 
                imageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"/></div>
            </div>
            <hr></hr>
            <div class="OnlineResturant">
            <h2 className="res-heading-online">Resturant With Online Food Delivery In Kolkota</h2>
            <FilterComponent />
            <div className="resturant_container">
                {
                    AllResturant.map((resturant)=>(
                        <ResturantWithOnlineDelivery resData ={resturant}/>
                    ))
                }
            </div>
            </div>
        </div>

    )
}

export default Body