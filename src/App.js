import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// routes
import { authRoutes, homeRoutes } from './Routes'
// pages
import Auth from './pages/Auth'
import Home from './pages/Home'
// containers
import Login from './containers/auth/Login'
import Welcome from './containers/auth/Welcome'
import Register from './containers/auth/Register'
import Verify from './containers/auth/Verify'
import Chats from './containers/home/Chats'
import Search from './containers/home/Search'
import Settings from './containers/home/Settings'
// css
import './App.css'

const App = () => {
  return (
    <Routes>
      {/* Redirect to Auth Route */}
      <Route path="/" element={<Navigate to={authRoutes.authPage} replace />} />
      {/* Auth Routes */}
      <Route path={authRoutes.authPage} element={<Auth />}>
        <Route index element={<Welcome />} />
        <Route path={authRoutes.login} element={<Login />} />
        <Route path={authRoutes.register} element={<Register />} />
        <Route path={authRoutes.verify} element={<Verify />} />
      </Route>
      {/* Home Routes */}
      <Route path={homeRoutes.homePage} element={<Home />}>
        <Route index element={<Chats />} />
        <Route path={homeRoutes.search} element={<Search />} />
        <Route path={homeRoutes.settings} element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
