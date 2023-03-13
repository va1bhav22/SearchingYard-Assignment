import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../Components/StarRating';
import Footer from './Footer';
import { motion } from 'framer-motion';import "../styles/DiscriptionPage.css";
import { ImList2 } from "react-icons/im";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
const SingleCarousel = () => {
    const {id}=useParams()
    console.log(id);
    const [data, setData] = useState([]);
  const dataFetch = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US&page=2"
      )
      .then((r) => setData(r.data))
      .then((e) => console.log(e));
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const currentMovie = data?.results?.find((item) => item.id == id);
//   console.log(currentMovie);
  const getPosterUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie?.poster_path}`;
  };
  const getBackPosterUrl = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie?.backdrop_path}`;
  };
  return (
    <div>
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
            <img
              className="img2ndpost"
              src={getPosterUrl(currentMovie?.poster_path)}
              alt=""
            />
          </div>
          <div className="DiscripTionDetails2st">
            <div className="DiscriptionTitle">{currentMovie?.title}</div>
            <div className="MovieDetails">
              <div className="Ricon">R</div> &nbsp;
              <div className="ReleseDate">{currentMovie?.release_date}</div>
              &nbsp; <div>| {currentMovie?.original_language} |</div> &nbsp;
              <div>Romance, Drama, Action</div> &nbsp; :<div> 1h 55m</div>
            </div>
            <div className="DiscriptionIcon">
              <motion.div
                whileHover={{ scale: 1.4 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="FaPlay"
              >
                <ImList2 className="ReactIcons" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.4 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="FaPlay"
                
              >
                <AiFillHeart className="ReactIcons" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.4 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="FaPlay"
              >
                <MdOutlineBookmarkAdd className="ReactIcons" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.4 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="FaPlay"
              >
                <BsFillPlayCircleFill className="ReactIcons" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.4 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="FaPlay"
              >
                <AiFillStar className="ReactIcons" />
              </motion.div>
              <div className="FaPlaysingle">
                <FaPlay /> &nbsp; Play Trailer
              </div>
            </div>
            <div className="DisOverView">
              <div className="Overview">Overview</div>
              <br />
              <div
                style={{
                  textAlign: "justify",
                  lineHeight: "25px",
                  letterSpacing: "0.9px",
                }}
              >
                {currentMovie?.overview}
              </div>
            </div>
            <div>
              <StarRating />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default SingleCarousel