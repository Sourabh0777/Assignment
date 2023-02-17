import React from 'react'
import { useNavigate } from "react-router-dom";
import "./SearchList.css"

function SearchList({ key, name, image, time, healthscore, sourcename, summary }) {

  const navigate = useNavigate();
  const passSate = () => {
    navigate("/ViewDetails", { state: { name, image, time, healthscore, sourcename, summary } })
  };

  return (
    <div className="search_list">
      <div className="name"> <h4>Name</h4> <h6>{name}</h6> </div>
      <div className="healthsc"><h4>Health Score</h4> <h6>{healthscore}</h6></div>
      <div className='search_list_image'><img src={image} alt="" /></div>

      <button className='viewDetails' onClick={passSate} >View details</button>

    </div>
  )
}
export default SearchList