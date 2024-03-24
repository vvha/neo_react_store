import React from 'react'

import {Star} from '../../assets/images/svg/'
import BuyButton from '../UI/BuyButton/BuyButton'

import classes from './Product.module.scss'

const Product = ({data}) => {
    const OrderProduct = () =>{

    }

  return (
      <div className={classes.product_container}>
          <div className={classes.img_wrapper}>
              <img
                  src="..\..\assets\images\headphones\wired\Apple-BYZ-S8521.png"
                  alt=""
              />
          </div>
          <div className={classes.info}>
              <div className={classes.container}>
                  <div className={`${classes.item} ${classes.name}`}>{data.name}</div>
                  <div className={`${classes.item} ${classes.price}`}>price</div>
              </div>
              <div className={`${classes.item} ${classes.container}`}>
                  <div className={classes.rating_wrapper}>
                      <Star />
                      <div className={classes.rating}>4.5</div>
                  </div>
                  <BuyButton className={`${classes.item}`} onClick={OrderProduct}>Купить</BuyButton>
              </div>
          </div>
      </div>
  );
}

export default Product