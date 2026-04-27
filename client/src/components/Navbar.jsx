import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Navbar.css';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, logout } = useContext(ShopContext);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Link to='/' className='logo'>
                <h1 className='logo-text'>Shop<span>Smart</span></h1>
            </Link>

            <ul className='nav-links'>
                <NavLink to='/' className='nav-link'>HOME</NavLink>
                <NavLink to='/collection' className='nav-link'>COLLECTION</NavLink>
                <NavLink to='/about' className='nav-link'>ABOUT</NavLink>
                <NavLink to='/contact' className='nav-link'>CONTACT</NavLink>
            </ul>

            <div className='nav-icons'>
                <div onClick={() => { setShowSearch(true); navigate('/collection') }} className='nav-icon-wrapper'>
                    <svg className='nav-icon-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                
                <div className='profile-group'>
                    <div onClick={() => token ? null : navigate('/login')} className='nav-icon-wrapper'>
                        <svg className='nav-icon-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    {token && 
                        <div className='dropdown-menu'>
                            <p onClick={() => navigate('/profile')} className='dropdown-item'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='dropdown-item'>Orders</p>
                            <p onClick={logout} className='dropdown-item'>Logout</p>
                        </div>
                    }
                </div>

                <Link to='/cart' className='cart-icon-group'>
                    <svg className='nav-icon-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    <p className='cart-count'>{getCartCount()}</p>
                </Link>

                <div onClick={() => setVisible(true)} className='menu-icon-wrapper'>
                    <svg className='menu-icon-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </div>
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`sidebar ${visible ? 'sidebar-visible' : ''}`}>
                <div className='sidebar-content'>
                    <div onClick={() => setVisible(false)} className='back-btn'>
                        <img className='back-icon' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/dropdown_icon.png" alt="back" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
