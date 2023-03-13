import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, resentMovieData } from "../Redux/action/action";
import SingleCard from "../Components/SingleCard";
import { motion } from "framer-motion";
import "../styles/SingleCard.css";
import Footer from "./Footer";
import Slider from "../Components/Slider";
import { AiFillLeftCircle } from 'react-icons/ai';
import { AiFillRightCircle } from 'react-icons/ai';
import PosterData from "../Components/PosterData";
const MovieHome = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log(data);

  const d = data.data;
  // console.log(d);
  const [page, setPage] = useState(1);

  const handlePrevPage = () => {
    setPage(page -1);
  }

  const handleNextPage = () => {
    setPage(page +1);
  }
  useEffect(() => {
    dispatch(fetchData(page))
    
  }, [dispatch,page]);


  return (
    <div>
      <div>
        <PosterData/>
      </div>
       <div>
       <Slider/>
     
      </div>
      {/* <Searching/> */}
      <div className="MainHomeData">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="Title"
        >
          <h1>Popular Movies</h1>
        </motion.div>
        <hr />
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2.5 }}
          className="MainCradDiv"
        >
          {d.results?.map((ele) => {
            return (
              <>
                <SingleCard key={ele.id} {...ele} />
              </>
            );
          })}
        </motion.div>
      </div>
      {/* Paganitaion */}
      <div className="pagiantionButtons">
       <div style={{backgroundColor:"none"}}> <AiFillLeftCircle className="prevbtnicon" onClick={handlePrevPage} disabled={page === 1}/></div>
        <p  className="PageNumber">{page}</p>
        <div><AiFillRightCircle className="prevbtnicon" onClick={handleNextPage}/></div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default MovieHome;
