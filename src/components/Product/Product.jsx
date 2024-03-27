import React from "react";

import { Star } from "../../assets/images/svg/";
import BuyButton from "../UI/BuyButton/BuyButton";

import classes from "./Product.module.scss";
import { useDispatch } from "react-redux";
import { addItemToCart, calculateTotal } from "../../features/CartSlice";

const Product = ({ data }) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.product_container}>
            <div className={classes.img_wrapper}>
                <img src={data.img} alt="" />
            </div>
            <div className={classes.info}>
                <div className={classes.container}>
                    <div className={`${classes.item} ${classes.name}`}>
                        {data.title}
                    </div>
                    <div className={classes.price_section}>
                        <div className={`${classes.item} ${classes.price}`}>
                            {data.price} ₽
                        </div>
                        {data.oldPrice ? (
                            <s className={classes.oldPrice}>
                                {data.oldPrice} ₽
                            </s>
                        ) : null}
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.rating_wrapper}>
                        <Star />
                        <div className={classes.rating}>{data.rate}</div>
                    </div>
                    <BuyButton
                        className={`${classes.item}`}
                        onClick={() => dispatch(addItemToCart({ id: data.id }))}
                    >
                        Купить
                    </BuyButton>
                </div>
            </div>
        </div>
    );
};

export default Product;
