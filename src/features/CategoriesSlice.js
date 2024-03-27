import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addProductToCategory(state, action) {
      const { title, productId } = action.payload;
      // Проверяем, существует ли категория с указанным заголовком
      const categoryIndex = state.findIndex(cat => cat.title === title);
      if (categoryIndex !== -1) {
        // Если категория существует, добавляем продукт в массив продуктов категории
        state[categoryIndex].products.push(productId);
      } else {
        // Если категория не существует, создаем новую категорию с указанным заголовком и продуктом
        state.push({ title: title, products: [productId] });
      }
    },
    removeProductFromCategory(state, action) {
      const { title, productId } = action.payload;
      // Проверяем, существует ли категория с указанным заголовком
      const categoryIndex = state.findIndex(cat => cat.title === title);
      if (categoryIndex !== -1) {
        // Фильтруем массив продуктов категории, чтобы удалить продукт с указанным id
        state[categoryIndex].products = state[categoryIndex].products.filter(product => product.id !== productId);
      }
    },
  }
});

export const { addProductToCategory, removeProductFromCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
