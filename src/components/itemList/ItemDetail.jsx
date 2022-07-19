import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={producto.imgProducts}
              className="img-fluid rounded-start"
              alt={producto.title}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text">{producto.description}</p>
              <p className="card-text">$ {producto.price}</p>
              <p className="card-text">Stock: {producto.stock}</p>
              <p className="card-text">
                <ItemCount stock={producto.stock} initial={1} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
