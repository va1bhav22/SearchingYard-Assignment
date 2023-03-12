import React from 'react'
import {Link} from "react-router-dom"
import Searching from "./Searching"
const NavBar = () => {
  return (
    <div className='NavbarMainContainer'>
        <div className="navrBarContainer">
            <div><img className='NavbarLogo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" /></div>
            <div><Link to="/">Home</Link></div>
            <div><Searching/></div>
        </div>
    </div>
  )
}

export default NavBar