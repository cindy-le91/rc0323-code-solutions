import './Header.css';
import { Link, Outlet } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* TODO: Make these links to About and Catalog, with className "title" */}
            <Link to="about" className="nav-item nav-link">About</Link>
            <Link to="/" className="nav-item nav-link">Catalog</Link>
          </ul>
        </div>
      </nav>
      {/* Render the Outlet here. */}
      <Outlet />
    </div>
  );
}
