import { useState } from "react";
import { resList } from "../utils/mockData";
import ResturantCard from "./ResturantCard";wh
const Body = () => {
    //state variable - Super powerful variable 

    let [ListofResturants, setListofResturants] = useState(resList)
    
    

    return (
        <div className="Body maxWidth">
            <div className="button_container">
                Search
                <button className="top_res" onClick={() => {
                  // filter logic here
                    setListofResturants(ListofResturants.filter((res) => res.info.avgRating === 4.3))
                    }}
                >Top Resturants</button>
            </div>
            <div className="resturant_container">
                {
                    ListofResturants.map((resturant)=>(
                        <ResturantCard key = {resturant?.info?.id}
                        resData = {resturant}/>
                    ))
                }   
            </div>
        </div>
    )
}

export default Body;