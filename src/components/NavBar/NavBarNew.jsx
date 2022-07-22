import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import CartWidgetIcono from "./CartWidgetIcono";
import CartWidgetCarrito from "./CartWidgetCarrito";
import { Link } from "react-router-dom";

const categories = [
  { id: "1", path: "/", name: "INICIO" },
  { id: "2", path: "/category/almacen", name: "ALMACEN" },
  { id: "3", path: "/category/panificados", name: "PANIFICADOS" },
  { id: "4", path: "/category/congelados", name: "CONGELADOS" },
];

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
        ></div>
        <li>
          <CartWidgetCarrito />
        </li>
        <ul className="navbar-nav">
          {categories.map((categories) => (
            <Link to={categories.path} key={categories.id}>
              {categories.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBarNew;
