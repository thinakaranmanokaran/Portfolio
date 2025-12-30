import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes