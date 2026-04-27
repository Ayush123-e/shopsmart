import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOrders from './pages/admin/ManageOrders';
import ManageUsers from './pages/admin/ManageUsers';
import AdminLogin from './pages/admin/AdminLogin';
import AddProduct from './pages/admin/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import AdminLayout from './components/admin/AdminLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || '');

    useEffect(() => {
        if (adminToken) {
            localStorage.setItem('adminToken', adminToken);
        } else {
            localStorage.removeItem('adminToken');
        }
    }, [adminToken]);

    return (
        <div className='app-container'>
            <ToastContainer />
            <Routes>
                {/* Admin Routes */}
                <Route path='/admin' element={<AdminLayout token={adminToken} setToken={setAdminToken} />}>
                    <Route index element={<AdminDashboard token={adminToken} />} />
                    <Route path='dashboard' element={<AdminDashboard token={adminToken} />} />
                    <Route path='products' element={<ManageProducts token={adminToken} />} />
                    <Route path='add-product' element={<AddProduct token={adminToken} />} />
                    <Route path='orders' element={<ManageOrders token={adminToken} />} />
                    <Route path='users' element={<ManageUsers token={adminToken} />} />
                </Route>
                <Route path='/admin/login' element={<AdminLogin setToken={setAdminToken} />} />

                {/* Customer Routes */}
                <Route path='*' element={
                    <>
                        <Navbar />
                        <SearchBar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/collection' element={<Collection />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/product/:productId' element={<Product />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/place-order' element={<PlaceOrder />} />
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/profile' element={<Profile />} />
                        </Routes>
                        <Footer />
                    </>
                } />
            </Routes>
        </div>
    );
};

export default App;
