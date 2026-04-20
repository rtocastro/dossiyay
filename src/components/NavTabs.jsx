import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const navItems = [
    { to: '/', label: 'About' },
    { to: '/portfolio', label: 'Work' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav-wrap">
      <Link to="/" className="brand-mark">
        Rick Torres
      </Link>

      <div className="nav-links">
        {navItems.map((item) => {
          const isActive = currentPage === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavTabs;