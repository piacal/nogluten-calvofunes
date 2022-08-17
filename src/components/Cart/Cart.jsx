import React, { useContext } from "react";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { Formulario } from "../formulario";

const Cart = () => {
  const { products, deleteProduct, totalPrice } = useContext(cartContext);

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
              {product.title}{" "}
              <h5 style={stylesCart.h5}>
                Cantidad: {product.quantity} Precio: $
                {product.price * product.quantity}
              </h5>
            </Link>
            <div className="m-t-sm">
              <button
                style={stylesCart.buttonDel}
                onClick={() => deleteProduct(product.id)}
              >
                Borrar del Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={stylesCart.totalPrice}>
        <h2 className="font-bold"> TOTAL COMPRAS = $ {totalPrice()}</h2>
        <hr />
        <div className="ibox-content">
          <Link to="/">
            <button style={stylesCart.buttonCon}>Continuar comprando</button>
          </Link>
        </div>
        <Link style={stylesCart.h3} to="/formulario">
          <button style={stylesCart.buttonCon}>Finalizar compra</button>
        </Link>
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
    margin: "20px",
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
  buttonDel: {
    width: "150px",
    height: "30px",
    backgroundColor: "rgb(227, 219, 219)",
    fontSize: "15px",
  },
  buttonCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
    width: "150px",
    height: "50px",
    backgroundColor: "grey",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    margin: "15px",
  },
};
