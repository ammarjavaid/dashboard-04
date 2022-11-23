import React, { Component, useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NewProduct from './pages/newProduct/NewProduct'
import NewUser from './pages/newUser/NewUser'
import Product from './pages/product/Product'
import ProductList from './pages/productList/ProductList'
import Signup from './pages/signup/Signup'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'

const App = () => {

  const [open, setOpen] = useState(false);
  // const [isAuth, setIsAuth] = useState();

  const handle = () => {
    setOpen(!open);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path='/users' element={<UserList open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path='/user/:userId' element={<User open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path='/newUser' element={<NewUser open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path='/products' element={<ProductList open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path='/product/:productId' element={<Product open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path='/newproduct' element={<NewProduct open={open} setOpen={setOpen} handle={handle}/>} />
          <Route path="*" element={<h1> Page Not Found 404! </h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App