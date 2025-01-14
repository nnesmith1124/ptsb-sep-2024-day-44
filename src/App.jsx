import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Layout from './Layout'

import './App.css'

const router = createBrowserRouter([
    // logo page
    // home page
    {
        path: "/",
        element: <Layout><HomePage /></Layout>,
    },
    // about page
    {
        path: "/about",
        element: <Layout><AboutPage /></Layout>,
    },
    // 404 page
    {
        path: "*",
        element: <Layout>404 - PAGE NOT FOUND</Layout>,
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
