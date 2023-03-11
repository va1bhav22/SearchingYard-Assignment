import React from "react";
import "../styles/SingleCard.css";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
const getPosterUrl = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
};
const SingleCard = ({ original_title, poster_path, release_date,id }) => {
  // console.log(item);
  return (
    <div>
      
      <motion.div
      className="CardContainer"
      whileHover={{scale:1.1}}
      transition={{ delay: 0.2, duration: 0.2 }}
    >
      <div className="DetailsContainer">
      <Link style={{textDecoration:"none"}} to={`/moviedis/${id}`}>
        <div className="imgContainer">
          <img className="imgPoster" src={getPosterUrl(poster_path)} alt="" />
        </div>
        <div className="DetailsText">
          <div className="PosterTitle">{original_title}</div>
          <div>{release_date}</div>
        </div>
        </Link>
      </div>
    </motion.div>
    </div>
  );
};

export default SingleCard;
