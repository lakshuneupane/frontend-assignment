import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import Services from './Pages/Services/Services'
import Productdetails from './components/productdetail/Productdetails'
import Login from './Pages/Login/Login'
import { Signup } from './components/signup/Signup'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element= {<Home />} exact />
            <Route path='/about' element= {<About />} />
            <Route path='/products' element= {<Products />} />
            <Route path='/services' element= {<Services />} />
            <Route path='/productdetails/:id' element= {<Productdetails />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/signup' element= {<Signup />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes