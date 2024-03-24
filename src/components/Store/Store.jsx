import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'

import {classes} from './Store.module.scss'

const Store = () => {
  let products = [
    {id: 1, name: 'pr1'},
    {id: 2, name: 'pr2'},
    {id: 3, name: 'pr3'},
    {id: 4, name: 'pr4'},
    {id: 5, name: 'pr5'}
  ]
  return (
    <main>
      <Category name="наушники" products={products}/>
    </main>
  )
}

export default Store