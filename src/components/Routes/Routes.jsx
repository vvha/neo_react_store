import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {ROUTES} from "../../utils/routes"
import Store from '../Store/Store'
import Cart from '../Cart/Cart'
const AppRoutes = () => (
    <Routes>
        <Route index element={<Store />} />
        <Route path={ROUTES.STORE} element={<Store/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.FAVORITE} element={<Store/>}/>
    </Routes>
);

export default AppRoutes