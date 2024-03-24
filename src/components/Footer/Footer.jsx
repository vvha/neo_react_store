import React from 'react'
import { ROUTES } from '../../utils/routes'
import {Link} from "react-router-dom"
import classes from './Footer.module.scss'
import {Planet, VK, Whatsapp, Telegram} from '../../assets/images/svg'
const Footer = () => {
  return (
    <footer>
      <div className={classes.logo}>
        <Link to={ROUTES.STORE}>
          QPICK
        </Link>
      </div>

      <div className={classes.list_container}>
        <div className={classes.item}><Link to={ROUTES.FAVORITE}>Избранное</Link></div>
        <div className={classes.item}><Link to={ROUTES.CART}>Корзина</Link></div>
        <div className={classes.item}><Link>Контакты</Link></div>
        <div className={classes.item}><Link>Условия сервиса</Link></div>
        <div className={`${classes.item} ${classes.lang_select}`}>
          <Planet/>
          <button style={{color: "var(--text-secondary)"}}>Рус</button>
          <button>Eng</button>
        </div>
      </div>

      <div className={classes.links}>
        <Link><VK/></Link>
        <Link><Telegram/></Link>
        <Link><Whatsapp/></Link>
      </div>
    </footer>
  )
}

export default Footer