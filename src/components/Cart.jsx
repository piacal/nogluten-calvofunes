import React, { useContext } from "react";
import { cartContext } from "../components/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  //return <div>Soy el carrito</div>;
  const { products, deleteProduct, calcularTotal } = useContext(cartContext);

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
      <div className="container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className="ibox">
                <div className="ibox-title">
                  <h5>Productos en el carrito</h5>
                </div>
                {products.map((product) => (
                  <div className="ibox-content" key={product.id}>
                    <div className="table-responsive">
                      <table className="table shoping-cart-table">
                        <tbody>
                          <tr>
                            <td width="90">
                              <div className="cart-product-imitation"></div>
                            </td>
                            <td className="desc">
                              <h3>
                                <Link to="/" className="text-navy">
                                  {product.title}
                                </Link>
                              </h3>
                              <p className="small">{product.description}</p>

                              <div className="m-t-sm">
                                <button
                                  className="text-muted"
                                  onClick={() => deleteProduct(product.id)}
                                >
                                  <i className="fa fa-trash"></i> Borrar del
                                  Carrito
                                </button>
                              </div>
                            </td>

                            <td>
                              <h5>
                                Cantidad: {product.quantity} Precio:
                                {product.price * product.quantity}
                              </h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
                <div className="ibox-content">
                  <button className="btn btn-primary pull-right">
                    <i className="fa fa fa-shopping-cart"></i> Finalizar compra
                  </button>
                  <Link to="/">
                    <p className="btn btn-white">
                      <i className="fa fa-arrow-left"></i> Continuar comprando
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ibox">
                <div className="ibox-content">
                  <h2 className="font-bold">
                    {" "}
                    TOTAL COMPRAS = $ {calcularTotal()}
                  </h2>

                  <hr />
                  <div className="m-t-sm">
                    <div className="btn-group">
                      <Link to="/cart" className="btn btn-primary btn-sm">
                        <i className="fa fa-shopping-cart"></i> Pagar
                      </Link>
                      <Link to="/" className="btn btn-white btn-sm">
                        Cancelar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
