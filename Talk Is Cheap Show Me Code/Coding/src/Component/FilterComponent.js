import filter from '../Images/filter.png'
import arrowdown from '../Images/arrowdown.png'
import AllResturant from '../Utils/Resturant'
import { useState } from 'react'
import RestaurantCard from './ResturantCard'
import ResturantWithOnlineDelivery from './ResturantWithOnlineDelivery'






const FilterComponent = () =>{

    let [ListOfResturants, setResturants] = useState(AllResturant)

    return(
        <div className="filter_section">
            <ul className="list_items">
                <li className="filter">
                    <p>Filter</p>
                    <img src= {filter}></img>
                </li>
                <li className="sort_by">
                    <p>SortBy</p>
                    <img src= {arrowdown}></img>
                </li>
                <li>Fast Delivery</li>
                <li>New On Swiggy</li>
                <li>Ratings 4+</li>

                <li>Pure Veg</li>
                <li>Rs.300 - Rs.600</li>
                <li>Less Than Rs.300</li>
            </ul>
        </div>
    )
}

export default FilterComponent