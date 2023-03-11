import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchData } from '../Redux/action/action';
const MovieDis = () => {
  const [Current, setCurrent] = useState()
  const {id} =useParams()
  console.log(id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const d = data.data;
  // console.log(d);
  const currentMovie=d.results?.find((item)=>item.id==id)
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
    <div>
    <div>{currentMovie?.overview}</div>
    <img src={getPosterUrl(currentMovie?.poster_path)} alt="" />
    <img src={getBackPosterUrl(currentMovie?.backdrop_path)} alt="" />
    </div>
  )
}

export default MovieDis