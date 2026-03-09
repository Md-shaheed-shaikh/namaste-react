import { Cards } from "./Cards";
// import { obj } from "../utils/testData";
import { useState, useEffect} from "react";
import { Shimmer } from "./Shimmer";
export const Body=()=>{
    //useState
    const [realData,setrealData]=useState([]);
    const [copyData,setCopyData]=useState([]);
    const [searchText,setSearchText]=useState("");

    //useEffect
    useEffect(() => {
     fetchApi();
    },[]);

    async function fetchApi(){
        const fetchData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const jsonData = await fetchData.json();
        // console.log(jsonData.data.cards[3].card.card.info.name);
         setrealData(jsonData?.data?.cards?.slice(3));
         setCopyData(jsonData?.data?.cards?.slice(3));
    }

     function topRatedRestaurants(){
        const filteredData=copyData.filter((data)=>{return data.card.card.info.avgRating>4.5})
        setCopyData(filteredData);
    }

    function searchRestaurants(){
        const filteredData=realData.filter((data)=>{return data?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())});
        setCopyData(filteredData);
    }
    
    return realData.length===0?<Shimmer/> : (
            <div className="Body">
                <div className="Search-bar-container">
                    <div>
                        <input id="bar" type="text" placeholder="Search for restaurants or food" 
                        value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}}
                        />

                        <button id="submit" className="Buttons"
                        onClick={()=>{
                            searchRestaurants()
                        }}> Search</button>
                    </div>
                    <div className="filter">
                        <button id="filter-btn" className="Buttons" onClick={topRatedRestaurants}>Top rated Resauratnt</button>
                    </div>

                </div>
                
                <div className="food-item">
                        <h1>Biriyani</h1>
                    </div>
                <div className="Restaurant-container" >
                    <div className="Restaurant-cards">
                        {
                         copyData.map((data)=>{ const string_id=data?.card?.card?.info?.id; return <Cards key={parseInt(string_id)} resData={data?.card?.card}/>})
                         
                        } 
                    </div>
                </div>
            </div>
    )
}