import React from 'react'
import { ROUTES } from '../../utils/routes'
import {Link} from "react-router-dom"
import classes from './Footer.module.scss'
import {Planet, VK, Whatsapp, Telegram} from '../../assets/images/svg'
const Footer = () => {
  return (
      <footer>
          <Link to={ROUTES.STORE}>
              <div className={classes.logo}>QPICK</div>
          </Link>

          <div className={classes.list_container}>
              <Link to={ROUTES.FAVORITE}>
                  <div className={classes.item}>Избранное</div>
              </Link>
              <Link to={ROUTES.CART}>
                  <div className={classes.item}>Корзина</div>
              </Link>
              <Link>
                  <div className={classes.item}>Контакты</div>
              </Link>
              <Link>
                  <div className={classes.item}>Условия сервиса</div>
              </Link>
              <div className={`${classes.item} ${classes.lang_select}`}>
                  <Planet />
                  {/** перевода нет, поэтому инлайн стиль, как выбор языка. Иначе OnClick={changeLang()}*/}
                  <button style={{ color: "var(--text-secondary)" }}>
                      Рус
                  </button>
                  <button>Eng</button>
              </div>
          </div>

          <div className={classes.links}>
              <Link to="https://vk.com">
                  <VK />
              </Link>
              <Link>
                  <Telegram />
              </Link>
              <Link>
                  <Whatsapp />
              </Link>
          </div>
      </footer>
  );
}

export default Footer