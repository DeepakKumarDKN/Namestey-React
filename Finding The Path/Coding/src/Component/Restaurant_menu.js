import {useEffect, useState} from 'react'
import { bank_image_url, menuImageId, menu_api } from '../utils/linkFile';
import Shimmer from '../utils/Shimmer';
import green_star from '../Images/green_star.png'
import {useParams} from 'react-router-dom'




const ResaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null)
    const [menuItems, setMenuItems] = useState([])
    const {resId} = useParams()


    useEffect(()=>{
     fetchMenu();   
    },[])

    const fetchMenu = async() =>{; 
        const data = await fetch(menu_api + resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
        
    };
     if (resInfo === null) return  <Shimmer />           
       
    
    const {name, cuisines,areaName, avgRating, totalRatingsString}  = resInfo?.cards[0]?.card?.card?.info
    const {offers} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    const {itemCards,title} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

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
                {
                    offers.map((offer)=>(
                        <div className="offer_box" key = {offer?.info.header}>
                            <p>{<img src={bank_image_url + offer?.info?.offerLogo}></img>} {offer?.info?.header}</p>
                            <p>{offer?.info?.couponCode} | {offer?.info?.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className="Combos_container">
                <p className="title">{title}({itemCards.length})</p>
                <div className="combos_menu">
                    {
                        itemCards.map((item)=>(
                            <div className="combos_data" key={item?.card?.info?.id}>
                                <div className="combo_food_data">
                                    <div className="name_price_container">
                                        <p>{item?.card?.info?.name}</p>
                                        <p>Rs {item?.card?.info?.price/100}</p>
                                        <p>{item?.card?.info?.description}</p>
                                    </div>

                                    <div className="image_Secttion">
                                        {<img src={menuImageId + item?.card?.info?.imageId}></img>}
                                        <div>ADD</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            
        </div>
    )
}

export default ResaurantMenu;