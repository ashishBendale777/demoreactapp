import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './compo/About'
import Contact from './compo/Contact'
import Home from './compo/Home'
import MyOffCanvas from './compo/MyOffCanvas'
import MyNavBar from './MyNavBar'


function MyRoutes() {
    return (
        <div>
            <BrowserRouter>
                <MyOffCanvas/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRoutes