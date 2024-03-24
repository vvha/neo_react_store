import React from 'react'

import classes from "./NavButton.module.scss"

const NavButton = ({children, count}) => {
  return (
    <div className={classes.button_container}>
    <div className={classes.button}>
        {children}
        <div className={classes.badge}>{count}</div>
    </div>
    </div>
  )
}

export default NavButton;