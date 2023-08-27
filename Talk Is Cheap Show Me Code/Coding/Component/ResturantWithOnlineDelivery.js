import Star from "../Star.png"


const ResturantWithOnlineDelivery = (props) =>{
    const {resData} = props
    return(
       <div className='res_card'>
            <div className="card_one">
                <img className="image_one" src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId
                }/>
                <p className="food_name">{resData.info.name}</p>
                <p className="rating">
                    <img className= "star" src={Star} />
                    <p>{resData.info.avgRating}</p>
                </p>
                <p className="items_name">{resData.info.cuisines.join(',')}</p>
                <p className="Location">{resData.info.areaName}</p>
            </div>
        </div> 
    )
}

export default ResturantWithOnlineDelivery