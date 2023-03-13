import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Slider.css";
import {motion} from "framer-motion"
import {
  BsFillArrowRightCircleFill,
  BsArrowLeftCircleFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import Carousel from "./Carousel";
import { resentMovieData } from "../Redux/action/action";
import axios from "axios";

const Slider = () => {
  // const dispatch = useDispatch();
  //   const {resentData} = useSelector((state) => state.data);
  //     console.log("resentData",resentData);

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
  // console.log("ramchandra", data);

  let box = document.querySelector(".slider-container");
  const carosalButtonPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const carosalButtonNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div>
       <motion.div
initial={{ y: -250 }}
animate={{ y: 0 }}
transition={{ delay: 0.2, duration: 1 }}
className="Title"
>
<h1>Recent Movies</h1>
</motion.div>
<hr />
<br /> 
      <div className="image-carousal">
        <div className="IconsScrollSlider">
          <motion.button className="prev"  whileHover={{ scale: 1.2 }}
      transition={{ delay: 0.2, duration: 0.2 }} onClick={carosalButtonPrev}>
            <BsArrowLeftCircleFill className="prevbtnicon" />
          </motion.button>
          <motion.button  whileHover={{ scale: 1.2 }}
      transition={{ delay: 0.2, duration: 0.2 }} className="prev" onClick={carosalButtonNext}>
            <BsFillArrowRightCircleFill className="prevbtnicon" />
          </motion.button>
        </div>

        <div className="slider-container">
          {data?.results?.length > 0 &&
            data?.results?.map((item) => {
              return <Carousel key={item.id} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
