import { resList } from "../utils/mockData";
import ResturantCard from "./ResturantCard";
const Body = () => {

    let listofResturants = [{
        
            "info": {
              "id": "10369",
              "name": "Pizza Hut",
              "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
              "locality": "Tollygunge (241)",
              "areaName": "Netaji Nagar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Fast Food",
                "Pizzas"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "10369",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3200
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3200
              },
              "parentId": "721",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-09-08 05:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/pizza-hut-tollygunge-241-netaji-nagar-kolkata-10369",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "213122",
              "name": "Wow! Momo",
              "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
              "locality": "Netaji Metro Station,Garia",
              "areaName": "Tollygunge",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "feeDetails": {
                "restaurantId": "213122",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3200
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3200
              },
              "parentId": "1776",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-09-07 20:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/wow-momo-netaji-metro-station-garia-tollygunge-kolkata-213122",
              "type": "WEBLINK"
            }
          },
    ]

    return (
        <div className="Body maxWidth">
            <div className="button_container">
                Search
                <button className="top_res" onClick={() => {
                  // filter logic here
                    listofResturants = listofResturants.filter((res) => res.info.avgRating === 4.3)
                    console.log(listofResturants)
                    
                }}
                >Top Resturants</button>
            </div>
            <div className="resturant_container">
                {
                    listofResturants.map((resturant)=>(
                        <ResturantCard resData = {resturant}/>
                    ))
                }   
            </div>
        </div>
    )
}

export default Body;