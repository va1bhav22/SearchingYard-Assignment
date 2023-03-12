import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { seachingData } from '../Redux/action/action';
import { useSelector } from 'react-redux';
const SearchingDis = () => {
    const { id } = useParams();
    console.log(id);
    
    const { search_data }= useSelector((state) => state.data);
    console.log("search_data", search_data);
   
  return (
    <div>SearchingDis</div>
  )
}

export default SearchingDis