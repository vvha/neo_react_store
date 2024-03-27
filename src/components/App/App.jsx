import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./App.module.scss";

import { wired, wireless } from "../../assets/images/headphones/index";
import { addProductToCategory } from "../../features/CategoriesSlice";
import { addProduct } from "../../features/ProductsSlice";

const App = () => {
    // имитация запроса на сервер
    const dispatch = useDispatch();
    wired.forEach((product) => {
        dispatch(addProduct(product));
        dispatch(
            addProductToCategory({ title: "Наушники", productId: product.id })
        );
    });
    wireless.forEach((product) => {
        dispatch(addProduct(product));
        dispatch(
            addProductToCategory({
                title: "Беспроводные наушники",
                productId: product.id,
            })
        );
    });

    return (
        <div className={styles.app}>
            <Header />
            <AppRoutes />
            <Footer />
        </div>
    );
};

export default App;
