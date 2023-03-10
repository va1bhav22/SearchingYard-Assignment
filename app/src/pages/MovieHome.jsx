import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action/action";
const MovieHome = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log(data.data);
  // const d=data.data
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>MovieHome</div>
  )
}

export default MovieHome