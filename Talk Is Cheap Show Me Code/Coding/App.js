import React from 'react'
import ReactDOM  from 'react-dom/client'
import ResturantLogo from '../Coding/src/Images/ResturantLogo.jpg'
import star from '../Coding/src/Images/star.png'



/**
 * Header
 * - logo
 * - nav-items
 * Body
 * - Search
 * - Resturant Container
 * - Resturant Card
 *      - Image 
 *      - Name Of The Restaurant
 *      - rating
 *      - Star Rating
 *      - Cuisine 
 * Footer
 * - Copyight
 * - Links
 * - Address
 * - Contact Information
 */

const resList = [
{
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
    {
      "info": {
        "id": "86011",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "sxjyupdgbmh0gfookx9l",
        "locality": "Riddhi Siddhi Residency",
        "areaName": "Paschim Putiary",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "86011",
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
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 02:57:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
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
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-riddhi-siddhi-residency-paschim-putiary-kolkata-86011",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "351188",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Naktala",
        "areaName": "Garia",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "351188",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 02:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/kfc-naktala-garia-kolkata-351188",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "95449",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Near Ranikuthi,Regent Park area",
        "areaName": "Regent Park",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Fast Food",
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "95449",
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
        "parentId": "2",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "45 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 03:00:00",
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
        "link": "https://www.swiggy.com/restaurants/subway-near-ranikuthi-area-regent-park-kolkata-95449",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "287279",
        "name": "Kathleen Confectioners",
        "cloudinaryImageId": "e40c5b9a0187a3666d7936275ebf020a",
        "locality": "Jadavpur",
        "areaName": "Netaji Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Snacks",
          "Continental"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "287279",
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
        "parentId": "10674",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 21:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
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
        "link": "https://www.swiggy.com/restaurants/kathleen-confectioners-jadavpur-netaji-nagar-kolkata-287279",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "303071",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "BOSE ROAD, Near to Domino's Pizza",
        "areaName": "Naktala",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "303071",
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
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1000",
          "discountTag": "FLAT DEAL"
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
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-bose-road-near-to-dominos-pizza-naktala-kolkata-303071",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "31809",
        "name": "Hatari - Golf green",
        "cloudinaryImageId": "scgeihd7bk6qkxtvslj0",
        "locality": "Opp bijoygarh College",
        "areaName": "Jadavpur",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Seafood"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "31809",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "4024",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "46 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
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
        "link": "https://www.swiggy.com/restaurants/hatari-golf-green-opp-bijoygarh-college-jadavpur-kolkata-31809",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "360986",
        "name": "Dariole",
        "cloudinaryImageId": "xxs6se06ptfloeiln1yo",
        "locality": "Naktala",
        "areaName": "Naktala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "360986",
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
        "parentId": "6960",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 21:14:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/dariole-naktala-kolkata-360986",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "260659",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b925459fbc1faf59f02f7289eb079a74",
        "locality": "NSC BOSE ROAD NO. 231B KOLKATA",
        "areaName": "Bansdroni",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "260659",
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
        "parentId": "1",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "44 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
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
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-nsc-bose-road-no-231b-bansdroni-kolkata-260659",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "327770",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "jvolpnbfnn1lolrsovto",
        "locality": "Behala",
        "areaName": "Barisha",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.7,
        "veg": true,
        "feeDetails": {
          "restaurantId": "327770",
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
        "parentId": "582",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 22:15:00",
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
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-behala-barisha-kolkata-327770",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "304651",
        "name": "Chowman",
        "cloudinaryImageId": "06d12ec700e4118d159fab6c3a7256dd",
        "locality": "Jadavpur",
        "areaName": "Tollygunge",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Thai",
          "Oriental",
          "Burmese",
          "Tibetan"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "304651",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "266",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "46 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
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
        "link": "https://www.swiggy.com/restaurants/chowman-jadavpur-tollygunge-kolkata-304651",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "3639",
        "name": "Gupta Brothers",
        "cloudinaryImageId": "phgsysculhfxxcpzcs4j",
        "locality": "Ballygunge",
        "areaName": "Behala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Indian",
          "Chinese",
          "Italian",
          "Tibetan",
          "South Indian",
          "Desserts"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "3639",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "437",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 22:00:00",
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
        "link": "https://www.swiggy.com/restaurants/gupta-brothers-ballygunge-behala-kolkata-3639",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "5251",
        "name": "Bachan's Dhaba",
        "cloudinaryImageId": "ggez5y5emtvp50kbtd8s",
        "locality": "Near Kalighat Metro, Rash Behari Avenue",
        "areaName": "Kalighat",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "5251",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5700
        },
        "parentId": "6136",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
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
        "link": "https://www.swiggy.com/restaurants/bachans-dhaba-near-metro-rash-behari-avenue-kalighat-kolkata-5251",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "112899",
        "name": "Mama Mia! - Italian Ice Creams & Cakes",
        "cloudinaryImageId": "6c689815912468b32c212ff18b8cb813",
        "locality": "Mullick Road",
        "areaName": "Baghajatin",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.7,
        "feeDetails": {
          "restaurantId": "112899",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "621",
        "avgRatingString": "4.7",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
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
        "link": "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-mullick-road-baghajatin-kolkata-112899",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "13038",
        "name": "Haji Saheb Behala",
        "cloudinaryImageId": "bedbbaa7543c3d70d7a01b02046ee86e",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Mughlai"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "13038",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5700
        },
        "parentId": "92680",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "50 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
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
        "link": "https://www.swiggy.com/restaurants/haji-saheb-behala-behala-kolkata-13038",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "38710",
        "name": "Mio Amore - The Cake Shop",
        "cloudinaryImageId": "a1124a792a0033ec873e4a57b666c285",
        "locality": "Near Baghajatin More",
        "areaName": "Baghajatin",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Snacks"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "38710",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "292958",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 21:30:00",
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
        "link": "https://www.swiggy.com/restaurants/mio-amore-the-cake-shop-near-more-baghajatin-kolkata-38710",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "326667",
        "name": "6 Ballygunge Place",
        "cloudinaryImageId": "mdvkb3juzuqdvj5f3ad2",
        "locality": "Nsc Bose Road",
        "areaName": "Garia",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Bengali"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "326667",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "1243",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
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
        "link": "https://www.swiggy.com/restaurants/6-ballygunge-place-nsc-bose-road-garia-kolkata-326667",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "14375",
        "name": "Kasturi Restaurant",
        "cloudinaryImageId": "lvdcdcwsbufum0kn7b5p",
        "locality": "Central Road",
        "areaName": "Jadavpur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bengali",
          "Thalis",
          "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "14375",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "2046",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "50 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-07 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
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
        "link": "https://www.swiggy.com/restaurants/kasturi-restaurant-central-road-jadavpur-kolkata-14375",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "355772",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "kaj9fga8axqaehim5nez",
        "locality": "Poddar Nagar",
        "areaName": "Jadavpur",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "feeDetails": {
          "restaurantId": "355772",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "12175",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-08 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-poddar-nagar-jadavpur-kolkata-355772",
        "type": "WEBLINK"
      }
    }
  ]

const Header = () => {
    return (
        <div className="header">
            <div className='logo_container'>
                <img className='logo' src={ResturantLogo}></img>
                <h1>Food Villa</h1>
            </div>
            <div className='nav_items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const ResturantCard = (props) => {
    const {resData} = props

    const {cloudinaryImageId,name,avgRating,cuisines,locality} = resData?.info
    
    return (
        <div className="res-card">
            <ul className="card_list_items">
                <li>
                    <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
                    </li>
                <li>{name}</li>
                <li className="rating-box">
                    <img className="rating_image"src={star}></img>
                    {avgRating}
                </li>
                <li>{cuisines.join(',')}</li>
                <li>{locality}</li>
            </ul>
        </div>
    )
}

const Body = () => {
    return (
        <div className="Body maxWidth">
            <div className="search_bar">
                Search
            </div>
            <div className="resturant_container">
                {
                    resList.map((resturant)=>(
                        <ResturantCard resData = {resturant}/>
                    ))
                }
        
    
               
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)