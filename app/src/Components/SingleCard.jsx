import React from "react";
import "../styles/SingleCard.css";
import { motion } from "framer-motion";
const getPosterUrl = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
};
const SingleCard = ({ original_title, poster_path, release_date }) => {
  // console.log(item);
  return (
    <motion.div
      className="CardContainer"
      whileHover={{scale:1.1}}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="DetailsContainer">
        <div className="imgContainer">
          <img className="imgPoster" src={getPosterUrl(poster_path)} alt="" />
        </div>
        <div className="DetailsText">
          <div className="PosterTitle">{original_title}</div>
          <div>{release_date}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleCard;
