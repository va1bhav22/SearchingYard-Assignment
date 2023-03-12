import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux'
import {seachingData} from '../Redux/action/action'
import { useNavigate } from 'react-router-dom';
import  '../styles/Searching.css'


const Searching = () => {
    const dispatch = useDispatch();
    const [input_data, setInput_data] = useState("");
    const navigate = useNavigate();

   const {search_data} = useSelector((store) => store.data);
   console.log("search_data",search_data);

    const handleClickSearch = () => {
            dispatch(seachingData(input_data)).then((res) => {
                return navigate("/search");
            })      
    }

    const getPosterUrl = (poster_path) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
      };
  return (
    <div>
        <div>
        <input type="text" placeholder='....Search your movive here'
        value={input_data}
        name="search"
        onChange={(e) => setInput_data(e.target.value)}/>
        <button onClick={handleClickSearch}>Search</button>
        </div>
        <div className='searching_div'>
            {
                search_data?.results?.map((item) => {
                    return (
                        <div className='searching_div_contentDiv'>
                            <div>
                                <img src={getPosterUrl(item.poster_path)} alt="image" />
                            </div>
                            <div>
                                <p>&nbsp;{"Title" }{" "}{":"}&nbsp;{" "}{item.original_title}</p>
                                <p>&nbsp;{"Overview"}{" "}{":"}&nbsp;{item.overview}</p>
                                <p>&nbsp;{"Relase Date"}{" "}{":"}&nbsp;{item.release_date}</p>
                                <p>&nbsp;{"Language"}{" "}{":"}&nbsp;{item.original_language}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Searching