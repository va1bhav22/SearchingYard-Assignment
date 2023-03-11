import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchData } from "../Redux/action/action";
import "../styles/DiscriptionPage.css";
const MovieDis = () => {
  
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const d = data.data;
  // console.log(d);
  const currentMovie = d.results?.find((item) => item.id == id);
  console.log(currentMovie);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const getPosterUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie?.poster_path}`;
  };
  const getBackPosterUrl = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie?.backdrop_path}`;
  };
  return (
    <div className="DisMainContainer">
      <div>
        <img
          className="DiscriptionBackImg"
          src={getBackPosterUrl(currentMovie?.backdrop_path)}
          alt=""
        />
      </div>
     <div className="CurruntPostMain">
     <motion.div
        initial={{ y: -370 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="DetailsContainerbg"
      >
        <div className="DiscripTionDetails1st">
        <img className="img2ndpost" src={getPosterUrl(currentMovie?.poster_path)} alt="" />
        </div>
        <div className="DiscripTionDetails2st">
          <div>{currentMovie?.title}</div>
        </div>
      </motion.div>
     </div>
    </div>
  );
};

export default MovieDis;


