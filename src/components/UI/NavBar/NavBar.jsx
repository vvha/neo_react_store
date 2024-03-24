import React from 'react'
import {Link} from "react-router-dom"
import {ROUTES} from "../../../utils/routes"

import NavButton from '../NavButton/NavButton'

import classes from "./NavBar.module.scss"

import {CartIco, Favorite} from "../../../assets/images/svg"

const NavBar = () => {
  let fav = 1;
  let cart = 2;
  return (
    <nav>
        <NavButton count={fav}><Link to={ROUTES.FAVORITE}><Favorite/></Link></NavButton>
        <NavButton count={cart}><Link to={ROUTES.CART}> <CartIco/></Link></NavButton>
    </nav>
  )
}

export default NavBar