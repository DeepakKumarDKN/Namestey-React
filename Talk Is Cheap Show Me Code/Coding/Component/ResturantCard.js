import Star from '../Star.png'

const RestaurantCard = (props) => {
    return(
        <div className='res_card'>
            <div className="card_one">
                <img className="image_one" src={props.imageLink}/>
                <p className="food_name">{props.foodname}</p>
                <p className="rating">
                    <img className= "star" src={Star} />
                    <p>{props.rating}</p>
                </p>
                <p className="items_name">{props.itemname}</p>
                <p className="Location">{props.location}</p>
            </div>
        </div>
    )
}

export default RestaurantCard