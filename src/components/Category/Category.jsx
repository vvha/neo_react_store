import React from "react";

import Product from "../Product/Product";

import classes from "./Category.module.scss";

const Category = ({ products, title }) => {
    return (
        <div className={classes.category_container}>
            <div className={classes.title}>{title}</div>

            <div className={classes.product_list}>
                {products.map((product) => (
                    <Product data={product} key={product.id}/>
                ))}
            </div>
        </div>
    );
};

export default Category;
