import React, { useEffect, useState } from 'react';
import "./SearchField.css"
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../../Hooks/useDebounce';
// Libraries
import axios from 'axios';
import SearchList from '../SearchList/SearchList';
import { Podcasts } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// https://api.spoonacular.com/recipes/complexSearch?apiKey=22e29551523745719f4e8aa8956f850d&query=${debounceSearch}&addRecipeInformation=true&instructionsRequired=true

function SearchField() {
  const [posts, setPosts] = useState();
  const [searcTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceSearch = useDebounce(searcTitle, 500)
  const navigate = useNavigate();

  useEffect(() => {
    //search API
    const loadPosts = async () => {
      setLoading(true);
      const responses = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=22e29551523745719f4e8aa8956f850d&query=${debounceSearch}&addRecipeInformation=true&instructionsRequired=true`);
      setPosts(responses.data.results)
      setLoading(false);
    }
    if (debounceSearch) {
      loadPosts()
    }
  }, [debounceSearch]);
  return (

    <div className='searchField'>

      <div className='searchField_bar'>
      <button className='searchField_fav' onClick={()=>navigate("/Myfav")}>Go To my favorites</button>
        <input className='searchField_bar_input' type="search" name="" id="" placeholder='Search' onChange={(e) => { setSearchTitle(e.target.value) }} />
        <SearchIcon />
      </div>
      {/* <SearchList
          key="1"
          name="Working"
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
        /> */}

      {loading ? (<h1>is loading</h1>) : (posts && posts.length > 0 ? posts.map((post) => {
        return (<SearchList
          key={post.id}
          name={post.title}
          image={post.image}
          time={post.readyInMinutes}
          healthscore = {post.healthScore}
          sourcename = {post.sourceName}
          summary= {post.summary}

        />)
      }) : null)}
    </div>
  )
}

export default SearchField