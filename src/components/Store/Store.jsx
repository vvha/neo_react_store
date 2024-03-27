import React, { useEffect } from 'react'
import Category from '../Category/Category'

import classes from './Store.module.scss'
import { useSelector } from 'react-redux'

const Store = () => {
  const categories = useSelector(state => state.categories)
  if (!categories.length) {
    return <div> Нет продуктов</div>
  }

  return (
    <section className={classes.store}>
      {categories.map((category, index)=> (
        <Category title={category.title} productsId={category.products} key={index}/>
      ))}
    </section>
  )
}

export default Store