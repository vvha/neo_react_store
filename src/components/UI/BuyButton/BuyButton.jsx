import React from 'react'
import classes from './BuyButton.module.scss'

const BuyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.buy_button}>
        {children}
    </button>
  )
}

export default BuyButton;