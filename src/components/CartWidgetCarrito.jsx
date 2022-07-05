import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidgetCarrito = () => {
    return ( 
        <>
        <div className="wrapper me-2 mt-2 cart">
            <a className="text-decoration-none text-dark badge" href="carrito">
                <span id="cantidadProductos">
                    0
                </span>
            </a>
            <i className="bi bi-cart4"></i>
        </div>
        </>
    );
}
 
export default CartWidgetCarrito;