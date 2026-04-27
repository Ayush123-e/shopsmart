import { NavLink } from 'react-router-dom';

function Sidebar({ setToken }) {
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setToken('');
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>ShopSmart</h2>
        <p>Admin Panel</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">📊</span>
          Dashboard
        </NavLink>
        
        <NavLink to="/admin/add-product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">➕</span>
          Add Product
        </NavLink>
        
        <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">📦</span>
          Manage Products
        </NavLink>

        <NavLink to="/admin/orders" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">📜</span>
          Manage Orders
        </NavLink>

        <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">👥</span>
          Manage Users
        </NavLink>
      </nav>

      <button onClick={handleLogout} className="logout-btn">
        <span className="nav-icon">🚪</span>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
