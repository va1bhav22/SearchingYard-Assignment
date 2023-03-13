import React from "react";
import "../styles/SingleSimilarCard.css";
import {motion} from "framer-motion"
const SimilarSingleCard = ({ poster_path }) => {
  const getPosterUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  };
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      className="SinglePosterCoro"
    >
      <img src={getPosterUrl(poster_path)} alt="" />
    </motion.div>
  );
};

export default SimilarSingleCard;
