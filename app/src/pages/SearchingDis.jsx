import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { seachingData } from '../Redux/action/action';
const SearchingDis = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const { search_data }= useSelector((store) => store.data);
    console.log("search_data", search_data);
    useEffect(() => {
        dispatch(seachingData());
      }, [dispatch]);
  return (
    <div>SearchingDis</div>
  )
}

export default SearchingDis