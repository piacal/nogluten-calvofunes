import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import CartWidgetIcono from './CartWidgetIcono';
import CartWidgetCarrito from './CartWidgetCarrito';


const NavBar = () => {
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
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Almacen</a></li>
                        <li><a className="dropdown-item" href="#">Panificados</a></li>
                        <li><a className="dropdown-item" href="#">Snacks</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">COMO COMPRAR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CONTACTO</a>
                </li>
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
