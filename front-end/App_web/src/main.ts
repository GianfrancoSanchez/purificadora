
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Stock from './components/Stock'
import ForgotPassword from './components/ForgotPassword'
import Home from './components/Home'
import './style.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/register', element: React.createElement(Register) }),
        React.createElement(Route, { path: '/login', element: React.createElement(Login) }),
        React.createElement(Route, { path: '/forgot-password', element: React.createElement(ForgotPassword) }),
        React.createElement(Route, { path: '/home', element: React.createElement(Home) }),
        React.createElement(Route, { path: '/stock', element: React.createElement(Stock) }),
        React.createElement(Route, { path: '/', element: React.createElement(Navigate, { to: '/login' }) })
      )
    )
  )
)
