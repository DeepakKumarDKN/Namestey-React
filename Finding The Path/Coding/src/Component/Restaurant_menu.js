import {useEffect, useState} from 'react'
import { menu_api } from '../utils/linkFile';
import Shimmer from '../utils/Shimmer';
import green_star from '../Images/green_star.png'
import { axis_logo } from '../utils/linkFile';


const ResaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
     fetchMenu();   
    },[])

    const fetchMenu = async() =>{; 
        const data = await fetch(menu_api);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
        
    };
    
    if(resInfo === null){
        return <Shimmer />
    }
    const {name, cuisines, areaName, avgRating, totalRatingsString} = resInfo?.cards[0]?.card?.card?.info
    
    return (
        <div className="resturant_info_maxWidth">

            <div className="resturant-info">
                <div className="food_info">
                    <p>{name}</p>
                    <p>{cuisines.join(", ")}</p>
                    <p>{areaName}</p>
                </div>
                <div className="ratings_container">
                    <div className="food_rating">
                        <img src={green_star}></img>
                        <p>{avgRating}</p>
                    </div>
                    <div></div>
                    <p>{totalRatingsString}</p>
                </div>
            </div>

            <div className="offers_container">

            </div>
        </div>
    )
}

export default ResaurantMenu;