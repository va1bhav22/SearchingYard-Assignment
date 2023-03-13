import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { seachingData } from "../Redux/action/action";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import "../styles/Searching.css";

const Searching = () => {
  const dispatch = useDispatch();
  const [input_data, setInput_data] = useState("");
  const navigate = useNavigate();
  const [toggle,setToggle]=useState(false)

  const { search_data } = useSelector((store) => store.data);
  // console.log("search_data", search_data);

  const handleClickSearch = (e) => {
    e.preventDefault()
    dispatch(seachingData(input_data));
    
  };

  const getPosterUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  };
  return (
    <div className="MainSearchingConainer">
      <div >
       <form action="">
       <input
          type="text"
          className="input"
          placeholder="....Search your movie here"
          value={input_data}
          name="search"
          onChange={(e) => setInput_data(e.target.value)}
        />
        <button onClick={handleClickSearch}>Search</button>
       </form>
      </div>
      <div className="searching_div">
        {search_data?.results?.map((item) => {
          return (
            <Link style={{color:"black",textDecoration:"none"}} to={`/searchdis/${item.id}`} >
               <div className="searching_div_contentDiv" >
              <motion.div
                whileHover={{ scale:1.03}}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="serchCardsCon"
              >
                <div>
                  <img src={getPosterUrl(item.poster_path)} alt="" />
                </div>
                <div style={{lineHeight:"10px",marginLeft:"-60px"}}>
                  <p>
                    &nbsp;{"Title"} {":"}&nbsp; {item.original_title}
                  </p>

                  <p>
                    &nbsp;{"Relase Date"} {":"}&nbsp;{item.release_date}
                  </p>
                  <p>
                    &nbsp;{"Language"} {":"}&nbsp;{item.original_language}
                  </p>
                </div>
              </motion.div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Searching;
