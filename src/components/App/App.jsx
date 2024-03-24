import React from 'react'
import AppRoutes from '../Routes/Routes'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from "./App.module.scss"

const App = () => {
  return (
    <div className={styles.app}>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </div>
  )
}

export default App