
import { CDN_URL } from "../utils/urls";
export const Cards=({resData})=>{
   
    // console.log(resData)
    // optional chaining
    const{cloudinaryImageId,name,avgRating,deliveryTime,cuisines }=resData?.info; 
    // console.log(props);
    return(
        <div className="cards">
        
            <img id="res-img" src={CDN_URL+cloudinaryImageId}/>
            <div className="rest-name">{name}</div>
            <div className="rest-info">
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
            </div>
            <span className="Cuisine">{cuisines.join(", ")}</span>
        </div>
    )
}