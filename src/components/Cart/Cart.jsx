import React, { useContext } from "react";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, deleteProduct, totalPrice } = useContext(cartContext);
  const { sendOrder } = useContext(cartContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input) => input.value);
    sendOrder(totalPrice(), {
      name: data[0],
      mail: data[1],
      phone: [2],
    });
  };

  if (products.length === 0) {
    return (
      <div className="carritoVacio d-flex flex-column flex-wrap justify-content-center align-items-center">
        <h2 className="p-2">No hay productos agregados </h2>
        <Link to="/">
          <button className="btn btn-primary">INICIO</button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <h2 style={stylesCart.h5}>PRODUCTOS DEL CARRITO</h2>
      <div style={stylesCart.container}>
        {products.map((product) => (
          <div style={stylesCart.titleProd} key={product.id}>
            <Link style={stylesCart.h3} to="/" className="text-navy">
              {product.title}
            </Link>
            <div className="m-t-sm">
              <button
                className="text-muted"
                onClick={() => deleteProduct(product.id)}
              >
                Borrar del Carrito
              </button>
            </div>

            <h5 style={stylesCart.h5}>
              Cantidad: {product.quantity} Precio:
              {product.price * product.quantity}
            </h5>
          </div>
        ))}
      </div>
      <div style={stylesCart.totalPrice}>
        <h2 className="font-bold"> TOTAL COMPRAS = $ {totalPrice()}</h2>
        <hr />
        <div className="ibox-content">
          <Link to="/">
            <p className="btn btn-white">
              <i className="fa fa-arrow-left"></i> Continuar comprando
            </p>
          </Link>
        </div>
        <form onSubmit={handleSumbit}>
          <input type="text" />
          <input type="email" />
          <input type="tel" />
          <button
            type="submit"
            className="btn btn-primary pull-right fa fa fa-shopping-cart"
          >
            Finalizar compra
          </button>
        </form>
      </div>
    </>
  );
};

export default Cart;

const stylesCart = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    margin: "10px",
  },
  h5: {
    display: "flex",
    flexDirection: "center ",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    margin: "15px",
  },
  titleProd: {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  h3: {
    textDecoration: "none",
    color: "black",
    textTransform: "uppercase",
  },
  totalPrice: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
