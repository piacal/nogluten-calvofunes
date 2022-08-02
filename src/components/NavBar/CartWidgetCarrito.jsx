import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartWidgetCarrito = () => {
  const { quantityProducts } = useContext(cartContext);
  return (
    <>
      <Link to="/cart" className="text-decoration-none text-dark badge">
        <div className="wrapper me-2 mt-2 cart">
          <span id="cantidadProductos">{quantityProducts}</span>
          <i className="bi bi-cart4"></i>
        </div>
      </Link>
    </>
  );
};

export default CartWidgetCarrito;
