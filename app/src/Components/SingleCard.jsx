import React from "react";
import "../styles/SingleCard.css"
const getPosterUrl = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
};
const SingleCard = ({ original_title, poster_path, release_date }) => {
  // console.log(item);
  return (
    <div className="CardContainer">
      <div className="DetailsContainer">
        <div className="imgContainer">
        <img className="imgPoster" src={getPosterUrl(poster_path)} alt="" />
        </div>
        <div className="DetailsText">
        <div className="PosterTitle">{original_title}</div>
        <div>{release_date}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
