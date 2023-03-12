import React from 'react'
import {Routes , Route} from "react-router-dom"
import MovieHome from '../pages/MovieHome'
import MovieDis from '../pages/MovieDis'
import NavBar from '../Components/NavBar'
const MainPage = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<MovieHome/>}/>
        <Route path='/moviedis/:id' element={<MovieDis/>}/>
    </Routes>
    </>
  )
}

export default MainPage