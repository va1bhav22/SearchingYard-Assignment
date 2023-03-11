import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action/action";
import SingleCard from '../Components/SingleCard';
import "../styles/SingleCard.css"
const MovieHome = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log(data);
  
  const d=data.data;
    console.log(d);
  useEffect(() => {
  
    dispatch(fetchData());
   
  }, [dispatch]);
  return (
    <div className='MainHomeData'>
      <div className='MainCradDiv'>
      {
       
        d.results?.map((ele)=>{
        return<>
        <SingleCard key={ele.id} {...ele}/>
        </>
       })
      }
    </div>
    </div>
  )
}

export default MovieHome