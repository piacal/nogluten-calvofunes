import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import CartWidgetIcono from "./CartWidgetIcono";
import CartWidgetCarrito from "./CartWidgetCarrito";
import { Link } from "react-router-dom";
import categories from "./elementosNavBar";

const NavBarNew = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <CartWidgetIcono />
            NO GLUTEN
          </a>
        </div>
        <div
          className="container-fluid collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {categories.map((categories) => (
              <Link
                className="nav-link active"
                aria-current="page"
                to={categories.path}
                key={categories.id}
              >
                {categories.name}
              </Link>
            ))}
            <CartWidgetCarrito />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBarNew;
