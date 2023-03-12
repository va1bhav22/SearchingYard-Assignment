import React from 'react'
import {Routes , Route} from "react-router-dom"
import MovieHome from '../pages/MovieHome'
import MovieDis from '../pages/MovieDis'
import NavBar from '../Components/NavBar'
import Searching from '../Components/Searching'
import SearchingDis from '../pages/SearchingDis'
const MainPage = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<MovieHome/>}/>
        <Route path='/moviedis/:id' element={<MovieDis/>}/>
        <Route path='/search' element={<Searching/>}/>
        <Route path='/searchdis/:id' element={<SearchingDis/>}/>
    </Routes>
    </>
  )
}

export default MainPage