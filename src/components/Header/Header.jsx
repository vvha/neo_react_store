import React from 'react'

import {Link} from "react-router-dom"

import {ROUTES} from "../../utils/routes"
import NavBar from '../UI/NavBar/NavBar'

import classes from "./Header.module.scss"

const Header = () => {
  return (
      <header>
          <Link to={ROUTES.STORE}>
              <div className={classes.logo}>QPICK</div>
          </Link>

          <NavBar />
      </header>
  );
}

export default Header