import { createSlice } from "@reduxjs/toolkit";
import { makeSelectProductById } from "./selectors";
import { useSelector } from "react-redux";

const initialState = {
    items: [],
    totalCost: 0,
    itemsAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Добавление продукта в корзину
        addItemToCart(state, action) {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === id
            );
            if (existingItemIndex !== -1) {
                // Если продукт уже есть в корзине, увеличиваем его количество
                state.items[existingItemIndex].amount += 1;
            } else {
                // Если продукта еще нет в корзине, добавляем его
                state.items.push({ id, amount: 1 });
            }
            state.itemsAmount += 1;
        },
        // Удаление продукта из корзины
        removeItemFromCart(state, {payload}) {
            const itemIndex = state.items.findIndex((item) => item.id === payload);
            state.itemsAmount -= state.items[itemIndex].amount;
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        increaseItemCount(state, { payload }) {
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload
            );
            if (itemIndex !== -1) {
                state.items[itemIndex].amount += 1;
            }
            state.itemsAmount += 1;
        },
        decreaseItemCount(state, { payload }) {
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload
            );
            if (itemIndex !== -1) {
                state.items[itemIndex].amount -= 1;
            }
            state.itemsAmount -= 1;
        },
        updateTotal(state, {payload}) {
            state.totalCost = payload
        },
    },
});

export default cartSlice.reducer;
export const {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
    updateTotal,
} = cartSlice.actions;
