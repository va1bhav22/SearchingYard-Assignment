import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bannerData } from "../Redux/action/action";
import StarRating from "./StarRating";
import {motion} from "framer-motion"
import { ImList2 } from "react-icons/im";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
  const currentMovie = {
    id: 505642,
    backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    popularity: 2723.956,
    poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    release_date: "2023-17-02",
    title: "Ant-Man and the Wasp: Quantumania",
    video: false,
    vote_average: 7.3,
    vote_count: 4037,
  }

const PosterData = () => {
  // const dispatch = useDispatch();
  // const {banner} = useSelector((state) => state.data);
  // console.log("baneerpage",banner);
  // useEffect(() => {
  //   dispatch(bannerData())

  // }, [dispatch]);
  // const [Banner, setBanner] = useState([])

  // const data = useSelector((state) => state.data);

  // const banner = data?.data.results;

  // localStorage.setItem("bannerData", JSON.stringify(banner[0]));

  // const singleBanner = JSON.parse(localStorage.getItem("bannerData")) || [];
  // console.log("single", singleBanner);

  // useEffect(() => {
  //   setBanner(banner)
  // }, [])
  // console.log(Banner);

  const getPosterUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie.poster_path}`;
  };
  const getBackPosterUrl = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie.backdrop_path}`;
  };
  return<div className="DisMainContainer">
    <div>
      <img
        className="DiscriptionBackImg"
        src="https://s1.dmcdn.net/v/UCe1c1Z7nd_1IY9Sk/x1080"
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
            src="https://i.pinimg.com/originals/66/e1/fd/66e1fdfbd62554aad5b087b1914880b0.jpg"
            alt=""
          />
        </div>
        <div className="DiscripTionDetails2st">
          <div className="DiscriptionTitle">{currentMovie?.title}</div>
          <div className="MovieDetails">
            <div className="Ricon">R</div> &nbsp;
            <div className="ReleseDate">{currentMovie?.release_date}</div>
            &nbsp; <div>| {currentMovie?.original_language} |</div> &nbsp;
            <div>Romance, Drama, Action</div> &nbsp; :<div> 2h 5m</div>
          </div>
          
          
          <div>
            {/* <StarRating /> */}
          </div>
        </div>
      </motion.div>
    </div>
  </div>;
};
export default PosterData;
