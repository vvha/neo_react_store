import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'

import {classes} from './Store.module.scss'

const Store = () => {
  let products = [
    {id: 1, title: 'pr1'},
    {id: 2, title: 'pr2'},
    {id: 3, title: 'pr3'},
    {id: 4, title: 'pr4'},
    {id: 5, title: 'pr5'}
  ]
  return (
    <main>
      <Category title="наушники" products={products}/>
    </main>
  )
}

export default Store