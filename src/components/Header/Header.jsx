import React from 'react'

import {Link} from "react-router-dom"

import {ROUTES} from "../../utils/routes"
import NavBar from '../UI/NavBar/NavBar'

import classes from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <div className={classes.logo}>
        <Link to={ROUTES.STORE}>
          QPICK
        </Link>
      </div>

      <NavBar/>
    </header>
  )
}

export default Header