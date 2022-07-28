import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "../contexts/CartContext";

const CartWidgetCarrito = () => {
  const { quantityProducts } = useContext(cartContext);
  return (
    <>
      <div className="wrapper me-2 mt-2 cart">
        <a className="text-decoration-none text-dark badge" href="carrito">
          <span id="cantidadProductos">{quantityProducts}</span>
        </a>
        <i className="bi bi-cart4"></i>
      </div>
    </>
  );
};

export default CartWidgetCarrito;
