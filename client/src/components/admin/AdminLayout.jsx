import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './AdminLayout.css';
import '../../pages/admin/Admin.css';

const AdminLayout = ({ token, setToken }) => {
    if (!token) {
        return <Navigate to="/admin/login" />;
    }

    return (
        <div className="admin-layout">
            <Sidebar setToken={setToken} />
            <div className="admin-main">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
