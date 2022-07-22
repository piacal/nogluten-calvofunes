import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
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
                <ItemCount stock={product.stock} initial={1} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
