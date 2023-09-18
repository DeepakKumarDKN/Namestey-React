import {useEffect, useState} from 'react'
import { menu_api } from '../utils/linkFile';
import Shimmer from '../utils/Shimmer';
import green_star from '../Images/green_star.png'


const ResaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
     fetchMenu();   
    },[])

    const fetchMenu = async() =>{; 
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4717414&lng=88.3454871&restaurantId=86011&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    };

    const {name} = resInfo?.cards[0]?.
    
    
    

    return resInfo === null ? <Shimmer/> :(
        <div className="resturant_info_maxWidth">
            <div className="resturant-info">
                <div className="food_info">
                    <p>Name</p>
                    <p>Cuisines</p>
                    <p>area name</p>
                </div>
                <div className="ratings_container">
                    <div className="food_rating">
                        <img src={green_star}></img>
                        <p>avgRating</p>
                    </div>
                    <div></div>
                    <p>1k + ratings</p>
                </div>
            </div>
        </div>
    )
}

export default ResaurantMenu;