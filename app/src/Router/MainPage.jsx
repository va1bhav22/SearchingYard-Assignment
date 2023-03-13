import React from 'react'
import {Routes , Route} from "react-router-dom"
import MovieHome from '../pages/MovieHome'
import MovieDis from '../pages/MovieDis'
import NavBar from '../Components/NavBar'
import Searching from '../Components/Searching'
import SearchingDis from '../pages/SearchingDis'
import SingleCarousel from '../pages/SingleCarousel'
const MainPage = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<MovieHome/>}/>
        <Route path='/moviedis/:id' element={<MovieDis/>}/>
        <Route path='/search' element={<Searching/>}/>
        <Route path='/searchdis/:id' element={<SearchingDis/>}/>
        <Route path='/carousel/:id' element={<SingleCarousel/>}/>
    </Routes>
    </>
  )
}

export default MainPage