import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action/action";
import SingleCard from "../Components/SingleCard";
import { motion } from "framer-motion";
import "../styles/SingleCard.css";
import Footer from "./Footer";
import Carousel from "../Components/Carousel ";
const MovieHome = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log(data);

  const d = data.data;
  console.log(d);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <div className="MainHomeData">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="Title"
        >
          <h1>Popular</h1>
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
      <div>
      {/* <Carousel/> */}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default MovieHome;
