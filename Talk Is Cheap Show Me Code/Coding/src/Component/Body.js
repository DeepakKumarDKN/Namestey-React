import AllResturant from "../Utils/Resturant"
import BestOffers from "./BestOffer"
import FilterComponent from "./FilterComponent"
import RestaurantCard from "./ResturantCard"
import ResturantWithOnlineDelivery from "./ResturantWithOnlineDelivery"
import { useState } from "react"
import TopResturantChain  from "./TopResturantChains"



const Body = () => {

    let [ListOfResturants, setResturants] = useState(AllResturant)

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
                    {
                        TopResturantChain.map((resturant)=>(
                            <RestaurantCard resData= {resturant}/>
                        ))
                    }
                </div>
            </div>
            <hr></hr>
            
            <div class="OnlineResturant"> 
                <div className="header-bar-restaurants">
                    
                <h2 className="res-heading-online">Resturant With Online Food Delivery In Kolkota</h2>

                <button className='top_resturants' onClick={() => setResturants(
                    ListOfResturants.filter((res) => res.info.avgRating >=4.6)
                )}>
                Top Resturants In Kolkata
            </button>

                </div>

            <FilterComponent />
            
            <div className="resturant_container">
                {
                    ListOfResturants.map((resturant)=>(
                        <ResturantWithOnlineDelivery key = {resturant.info.id} resData = {resturant}/>
                    ))
                }
            </div>
            </div>
        </div>

    )
}

export default Body