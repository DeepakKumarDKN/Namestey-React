import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { API_LINK } from "../utils/linkFile";
import Shimmer from "../utils/Shimmer";






const Body = () => {
    
let [ListofResturants, setListofResturants] = useState([])
const [filteredResturants, setfilteredResturants] = useState([])
let [searchValue, setsearchValue] = useState("")
    
    useEffect(()=>{
        fetchData(),
        filteredData()
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

    const filteredData = async () => {queueMicrotask
        const filterdata = await fetch (API_LINK)
        const jsondata = await filterdata.json()

        for(let i=0; i<jsondata.data.cards.length; i++){
            let filteredchecked = jsondata?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            if(filteredchecked !== undefined){
                return setfilteredResturants(filteredchecked)
            }
        }
    }


 
    return  filteredResturants.length === 0  ? <Shimmer/> : (
        <div className="Body maxWidth">
            <div className="button_container">
                <div className="search_bar">
                    <input type="text" 
                        placeholder="Search Resturants Name Here"
                        value = {searchValue} 
                        onChange={(e)=>{setsearchValue(e.target.value)}} 
                    />
                    <button className="submit_button" onClick={()=> {
                        setfilteredResturants(ListofResturants.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase())))
                    }}>Search</button>
                </div>
                <div>
                    <button className="top_res" onClick={() => {
                  // filter logic here
                    setfilteredResturants(ListofResturants.filter((res) => res.info.avgRating > 4.6))
                    }}
                    >Top Resturants</button>
                </div>
            </div>
            <div className="resturant_container">
                {
                    filteredResturants.map((resturant)=>(
                        <ResturantCard key = {resturant?.info?.id}
                        resData = {resturant}/>
                    ))
                }   
            </div>
        </div>
    )
}


export default Body;