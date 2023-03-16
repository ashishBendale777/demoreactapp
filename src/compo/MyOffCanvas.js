import React, { useState } from 'react'
import { Button, Nav, Offcanvas } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'



function MyOffCanvas() {
    const [isShow, setisShow] = useState(false)

    function onShow() {
        setisShow(true)
    }

    function onHide() {
        setisShow(false)
    }

    return (
        <div>
            <BrowserRouter>
                <Button onClick={() => { onShow() }}>Open</Button>
                <Offcanvas show={isShow} onHide={onHide}>
                    <Offcanvas.Header closeButton>Header</Offcanvas.Header>
                    <Offcanvas.Title>ADMIN</Offcanvas.Title>
                    <Offcanvas.Body>
                        <Nav className='flex-column'>
                            <Nav.Link onClick={()=>onHide()}>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link onClick={()=>onHide()}>
                                <Link to="/about">About</Link>
                            </Nav.Link>
                            <Nav.Link onClick={()=>onHide()}>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default MyOffCanvas