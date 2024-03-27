import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./SingleOrder.module.scss";

import { CycleBin, Decrease, Increase } from "../../assets/images/svg";
import { increaseItemCount, decreaseItemCount, removeItemFromCart } from "../../features/CartSlice";

const SingleOrder = ({data}) => {
    const dispatch = useDispatch();
    const amount = useSelector(state => state.cart.items).find((el)=> el.id == data.id).amount;
    const [count, setCount] = useState(amount);

    const increment = () => {
        setCount(count+1);
        dispatch(increaseItemCount(data.id))
    }

    const decrement = () => {
        setCount(count-1);
        count < 2 ? ProductDelete() : dispatch(decreaseItemCount(data.id))
    }

    function ProductDelete() {
        dispatch(removeItemFromCart(data.id))
    }
    
    return (
        <div className={classes.item_container}>
            <div className={classes.product}>
                <div className={classes.info}>
                    <img src={data.img} alt="" />
                    <div className={classes.counter}>
                        <button className={classes.count} onClick={decrement}>
                            <Decrease />
                        </button>
                        <div className={classes.total_count}>{count}</div>
                        <button className={classes.count} onClick={increment}>
                            <Increase />
                        </button>
                    </div>
                </div>
                <div className={classes.title}>
                <Link><div className={classes.name}>{data.title}</div></Link>
                    <div className={classes.price}>{data.price} ₽</div>
                </div>
            </div>
            <div className={classes.right}>
                <button className={classes.cycle_bin} onClick={ProductDelete}>
                    <CycleBin />
                </button>
                <div className={classes.total_cost}>{data.price * amount} ₽</div>
            </div>
        </div>
    );
};

export default SingleOrder;
