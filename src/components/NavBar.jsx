import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import CartWidgetIcono from './CartWidgetIcono';
import CartWidgetCarrito from './CartWidgetCarrito';
import NavBarLinks from './NavBarLinks';


const NavBar = () => {
    const elementNavBar = [{link: '#', text: 'INICIO'}, {link: '#', text: 'COMO COMPRAR'}, {link: '#', text:'CONTACTO'}];
    const navBarElem = elementNavBar.map(({link, text}) => <NavBarLinks link={link} text={text}/>);
    const optionProductos = ["Almacen", "Panificado", "Congelados"];
    const productos = <NavBarLinks dropdown text="PRODUCTOS" textOption={optionProductos.join('\n')}/>;
    return ( 
    <> 
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <CartWidgetIcono/>
            NO GLUTEN
            </a>
        </div>    
        <div className="container-fluid collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                {navBarElem}
                {productos}
                <li>
                    <CartWidgetCarrito/>
                </li>
            </ul>
        </div>
    </nav>
    </>    
    );
};
 
export default NavBar;
