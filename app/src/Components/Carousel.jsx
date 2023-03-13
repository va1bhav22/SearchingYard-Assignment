import React from "react";
import "../styles/Slider.css";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const Carousel = ({ poster_path,id }) => {
  const getPosterUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  };

  return (
    <Link to={`/carousel/${id}`}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      className="myCarousel"
    >
      <img src={getPosterUrl(poster_path)} alt="" />
    </motion.div>
    </Link>
  );
};

export default Carousel;
