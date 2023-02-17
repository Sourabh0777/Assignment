import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Myfav.css"


function Myfav() {
  const navigate = useNavigate();
  console.log(localStorage.getItem("total"));
  let totalMyfav_items = localStorage.getItem("total");
  let array = [];
  for (let index = 1; index <= totalMyfav_items; index++) {
    array.push(localStorage.getItem(index))
  }
  console.log(array);
  return (
    <div className='myFav'>
      <div className='myFav_button'>
        <button className='myFav_Go_ToSearch_button' onClick={() => navigate("/")}>Go to search</button>
      </div>

      <div className='myFav_cards'>
        <h2>My Favourite</h2>
        {array.map((favItem) => {
          let elemts = favItem.split(',');
          console.log(elemts[0]);
          return (
            <div className='myFav_card'>
              <h1>{elemts[0]}</h1>
              <img src={elemts[1]} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Myfav