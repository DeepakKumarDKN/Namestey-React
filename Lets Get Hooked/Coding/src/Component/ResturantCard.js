import star from '../Images/star.png'
import { CARD_URL } from '../utils/linkFile'


const ResturantCard = (props) => {
    const {resData} = props

    const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info
    
    return (
        <div className="res-card">
            <ul className="card_list_items">
                <li>
                    <img src= {CARD_URL + cloudinaryImageId }/>
                    </li>
                <li>{name}</li>
                <li className="rating-box">
                    <img className="rating_image"src={star}></img>
                    {avgRating}
                </li>
                <li>{cuisines.join(',')}</li>
                <li>{areaName}</li>
            </ul>
        </div>
    )
}

export default ResturantCard;