import React, { useMemo } from "react";

import classes from "./Cart.module.scss";
import SingleOrder from "../SingleOrder/SingleOrder";
import { useSelector } from "react-redux";

import {
    makeSelectFilteredProducts,
    makeSelectTotalCost,
} from "../../features/selectors";

const Cart = () => {
    // items selector
    const items = (state) => state.cart.items;
    // getting ids array from array of items objects
    const itemsId = useSelector(items).reduce((acc, item) => {
        acc.push(item.id);
        return acc;
    }, []);
    // memoized selector forfiltered by id products
    const selectFilteredProducts = useMemo( () => 
        makeSelectFilteredProducts(),
    []);
    // getting array of products objects
    const products = useSelector((state) =>
        selectFilteredProducts(state, itemsId)
    );
    const total_cost = useSelector(makeSelectTotalCost());

    if (!products.length) {
        return (
            <section className={classes.cart}>
                <h2>Корзина</h2>
                <div className={classes.order}>
                    <h4 className={classes.empty}>Корзина пуста</h4>
                    <div className={classes.order_price}>
                        <h3>итого</h3>
                        <div className={classes.total_price}>
                            {total_cost} ₽
                        </div>
                        <button className={classes.submit_btn}>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={classes.cart}>
            <h2>Корзина</h2>
            <div className={classes.order}>
                <div className={classes.order_container}>
                    {products.map((product) => (
                        <SingleOrder data={product} key={product.id} />
                    ))}
                </div>
                <div className={classes.order_price}>
                    <h3>итого</h3>
                    <div className={classes.total_price}>{total_cost} ₽</div>
                    <button className={classes.submit_btn}>
                        Перейти к оформлению
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
