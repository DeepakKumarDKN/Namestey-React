import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { API_LINK } from "../utils/linkFile";
import Shimmer from "../utils/Shimmer";






const Body = () => {
    
let [ListofResturants, setListofResturants] = useState([])
let [searchValue, setsearchValue] = useState("")
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data =  await fetch(API_LINK);
        const json = await data.json()

        for(let i=0; i<json.data.cards.length; i++){
            // Optional Chaining
            let checkedData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            if (checkedData !== undefined){
                return setListofResturants(checkedData);
            }
        }
    }

 
    return ListofResturants.length === 0 ? <Shimmer/> : (
        <div className="Body maxWidth">
            <div className="button_container">
                <div className="search_bar">
                    <input type="text" 
                        placeholder="Search"
                        value = {searchValue} 
                        onChange={(e)=>{setsearchValue(e.target.value)}} 
                    />
                    <button className="submit_button">Submit</button>
                </div>
                <div>
                    <button className="top_res" onClick={() => {
                  // filter logic here
                    setListofResturants(ListofResturants.filter((res) => res.info.avgRating > 4.6))
                    }}
                    >Top Resturants</button>
                </div>
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