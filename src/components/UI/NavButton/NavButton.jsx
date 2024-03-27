import React from 'react'

import classes from "./NavButton.module.scss"

const NavButton = ({children, count}) => {
  return (
      <div className={classes.button_container}>
          <div className={classes.button}>
              {children}
              {count ? (<div className={classes.badge}>{count}</div>) : null}
          </div>
      </div>
  );
}

export default NavButton;