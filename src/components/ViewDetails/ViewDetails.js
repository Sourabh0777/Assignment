import React from 'react';
import "./ViewDetails.css"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { htmlToText } from "html-to-text"

// console.log(
// "name ==> ", name,
// "image ==> ", image,
// "time ==> ", time,
// "healthscore ==> ", healthscore,
// "sourcename ==> ", sourcename,
// "summary ==> ", summary);

function ViewDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const { name, image, time, healthscore, sourcename, summary } = location.state;

  let test = htmlToText(summary);
  let data = location.state;
  const addToFav = () => {
    let totalCount = localStorage.getItem("total");
    if (totalCount === null) {
      totalCount = 1
    } else {
      totalCount++;
    }
    localStorage.setItem("total", totalCount);
    localStorage.setItem(totalCount, [name, image]);

  }
  console.log(localStorage.getItem(2));
  return (
    <div className=' viewdetails'>
      <div className="viewDetails_header">
        <ArrowBackIcon className='backbutton' onClick={() => navigate("/")}>GO Back</ArrowBackIcon>
        <button className='viewdetails_myfav' onClick={() => navigate("/Myfav")}>View My favorites</button>
        </div>

      <div className="search_list">
        <div className="name"> <h4>Name</h4> <h6>{name}</h6> </div>


        <div className="city"><h4>Time To prepare</h4><h6>{time}</h6></div>
        <div className="state"><h4>Health Score</h4><h6>{healthscore}</h6></div>
        <div className="state"><h4>Source Name</h4><h6>{sourcename}</h6></div>
        <div className="state"><h4>Click on star to add in favorites</h4><StarOutlineIcon onClick={addToFav} /></div>

      </div>
      <div className='ViewDetails_box'>
        <div className='ViewDetails_box_Discription'>
        <h2>Description </h2>
        <p>{test}</p>
        </div>
        <div className="image"><h4>Image</h4><h6><img className='image_of_item'src={image} alt="" /></h6></div>

      </div>
    </div>
  )
}

export default ViewDetails