import React, { useContext, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/CartContext";

const ItemDetail = ({ product }) => {
  const [amount, setAmount] = useState(0);
  const { addProduct } = useContext(cartContext);
  const onAdd = (count) => {
    addProduct({ ...product, quantity: count });
    setAmount(true);
  };
  return (
    <>
      <div style={stylesDetail.container}>
        <img
          style={stylesDetail.logoProd}
          src={product.imgProducts}
          alt={product.title}
        />

        <div style={stylesDetail.infoTextContainer}>
          <h5 style={stylesDetail.h5}>{product.title}</h5>
          <p style={stylesDetail.infoText}>{product.description}</p>
          <p style={stylesDetail.infoText}>Precio $ {product.price}</p>
          <p style={stylesDetail.infoText}>Stock: {product.stock}</p>
          <p style={stylesDetail.infoText}>
            {amount ? (
              <Link to="/cart/">
                <button style={stylesDetail.buttonFin}>FINALIZAR COMPRA</button>
              </Link>
            ) : (
              <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

const stylesDetail = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderStyle: "groove",
  },

  logoProd: {
    width: "30%",
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "right",
    justifyContent: "center",
  },
  infoText: {
    marging: "10px",
    marginLeft: "50px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "right",
    fontSize: "15px",
  },
  h5: {
    display: "flex",
    alignItems: "right",
    marginLeft: "50px",
    fontSize: "20px",
  },
  buttonFin: {
    width: "150px",
    height: "50px",
    backgroundColor: "rgb(54, 54, 54)",
    color: "white",
    fontSize: "15px",

    margin: "15px",
  },
};
