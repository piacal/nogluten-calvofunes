/* import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import CartWidgetIcono from "./CartWidgetIcono";
import CartWidgetCarrito from "./CartWidgetCarrito";
import NavBarLink from "./NavBarLinks";

const NavBar = () => {
  const elementNavBar = [
    { link: "#", text: "INICIO" },
    { link: "#", text: "COMO COMPRAR" },
    { link: "#", text: "CONTACTO" },
  ];
  const navBarElem = elementNavBar.map(({ link, text }) => (
    <NavBarLink link={link} text={text} />
  ));

  const optionProducts: OptionProductsType[] = [
    { linkOption: "#", textOption: "Almacen" },
    { linkOption: "#", textOption: "Panificado" },
    { linkOption: "#", textOption: "Congelados" },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NO GLUTEN
          </a>
        </div>
        <div
          className="container-fluid collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {navBarElem}
            <NavBarLink
              text="PRODUCTOS"
              link="#"
              dropdown
              optionProducts={optionProducts}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
};

interface NavBarLinkProps {
  text: string;
  link: string;
  dropdown?: boolean;
  optionProducts?: OptionProductsType[];
}

interface OptionProductsType {
  linkOption: string;
  textOption: string;
}

export default NavBar;
 */
