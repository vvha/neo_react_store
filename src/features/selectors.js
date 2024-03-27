import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = (state) => state.products;

export const selectCartItems = (state) => state.cart.items;

// Создаем фабрику селекторов, которая принимает массив id для фильтрации
export const makeSelectFilteredProducts = () =>
    createSelector(
        [selectAllProducts, (_, idsToFilter) => idsToFilter],
        (products, idsToFilter) => {
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
      // Вычисляем общую стоимость
      let totalPrice = 0;
      cartItems.forEach(cartItem => {
        const product = allProducts.find(product => product.id === cartItem.id);
        if (product) {
          totalPrice += product.price * cartItem.amount;
        }
      });
      return totalPrice;
    }
  );
