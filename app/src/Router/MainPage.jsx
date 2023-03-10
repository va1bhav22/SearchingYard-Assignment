import React from 'react'
import {Routes , Route} from "react-router-dom"
import MovieHome from '../pages/MovieHome'
import MovieDis from '../pages/MovieDis'
const MainPage = () => {
  return (
    <Routes>
        <Route path='/' element={<MovieHome/>}/>
        <Route path='/moviedis/:id' element={<MovieDis/>}/>
    </Routes>
  )
}

export default MainPage