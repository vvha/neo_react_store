import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = (state) => state.products;

export const selectCartItems = (state) => state.cart.items;

export const makeSelectFilteredProducts = () =>
    createSelector(
        // list of all products and id`s array
        [selectAllProducts, (_, idsToFilter) => idsToFilter],
        (products, idsToFilter) => {
            // returns AllProducts array filtered by IdsToFilter
            return products.filter((product) =>
                idsToFilter.includes(product.id)
            );
        }
    );

export const makeSelectProductById = () =>
    createSelector(
        // Принимаем список всех продуктов и идентификатор продукта
        [selectAllProducts, (_, productId) => productId],
        (products, productId) => {
            // Ищем продукт в списке продуктов по переданному идентификатору
            return products.find((product) => product.id === productId);
        }
    );

export const makeSelectTotalCost = () => createSelector(
    [selectCartItems, selectAllProducts],
    (cartItems, allProducts) => {
      let totalPrice = 0;
      // iteration by cartItems to get total Price (getting price of id`s product)
      cartItems.forEach(cartItem => {
        const product = allProducts.find(product => product.id === cartItem.id);
        if (product) {
            // acc
          totalPrice += product.price * cartItem.amount;
        }
      });
      return totalPrice;
    }
  );
