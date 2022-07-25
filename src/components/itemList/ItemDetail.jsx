import { useState } from "react";
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [amount, setAmount] = useState(0);
  const onAdd = (amount) => {
    setAmount(amount);
  };
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={product.imgProducts}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">$ {product.price}</p>
              <p className="card-text">Stock: {product.stock}</p>
              <p className="card-text">
                {amount == 0 ? (
                  <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
                ) : (
                  <h1>
                    Agregaste {amount} {product.title}
                  </h1>
                )}
                <Link to="/cart/">
                  <button className="btn btn-warning">Ir al carrito</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
