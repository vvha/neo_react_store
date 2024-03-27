import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import {ROUTES} from "../../../utils/routes"

import NavButton from '../NavButton/NavButton'

import classes from "./NavBar.module.scss"

import {CartIco, Favorite} from "../../../assets/images/svg"
import { useSelector } from 'react-redux'

const NavBar = () => {
  let fav = 1;
  let cart = useSelector(state=> state.cart.itemsAmount);
  return (
    <nav>
        <NavButton count={fav}><Link to={ROUTES.FAVORITE}><Favorite/></Link></NavButton>
        <NavButton count={cart}><Link to={ROUTES.CART}> <CartIco/></Link></NavButton>
    </nav>
  )
}

export default NavBar