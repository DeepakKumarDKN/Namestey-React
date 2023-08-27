import filter from './filter.png'
import arrowdown from './arrowdown.png'


const FilterComponent = () =>{
    return(
        <div className="filter_section">
            <ul className="list_items">
                <li className="filter">
                    <p>Filter</p>
                    <img src= {filter}></img>
                </li>
                <li className="sort_by">
                    <p>SortBy</p>
                </li>
                <li>Fast Delivery</li>
                <li>New On Swiggy</li>
                <li>Ratings 4+</li>
                <li>Pure Veg</li>
                <li>Rs.300- Rs.600</li>
                <li>Less Than Rs.300</li>
            </ul>
        </div>
    )
}

export default FilterComponent