import {React, useMemo} from "react";

import Product from "../Product/Product";

import classes from "./Category.module.scss";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { makeSelectFilteredProducts } from "../../features/selectors";

const Category = ({ productsId, title }) => {
   // Создаем селектор для отфильтрованных продуктов, используя фабрику селекторов
  const selectFilteredProducts = useMemo(() => makeSelectFilteredProducts(), []);
  // Используем useSelector для получения отфильтрованных продуктов из хранилища
  const products = useSelector(state => selectFilteredProducts(state, productsId));


    return (
        <div className={classes.category_container}>
            <div className={classes.title}>{title}</div>

            <div className={classes.product_list}>
                {products.map((product) => (
                    <Link key={product.id}>
                        <Product data={product}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;
