import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(0);

  const qtyProducts = () => {
    let quantity = 0;
    products.forEach((product) => (quantity += product.quantity));
    setQuantityProducts(quantity);
  };

  useEffect(() => {
    qtyProducts();
  }, [products]);

  const isInCart = (id) => {
    //const serch = products.find((product) => product.id === id);
    //return serch ? true : false;
    return products.some((products) => products.id === id);
  };

  const addProduct = (product) => {
    if (isInCart(product.id)) {
      const found = products.find((p) => p.id === product.id);
      const index = products.indexOf(found);
      const arrAux = [...products];
      arrAux[index].quantity += product.quantity;
      setProducts(arrAux);
    } else {
      setProducts([...product, product]);
    }
  };

  const deleteProduct = (id) => {
    const productFilter = products.filter((product) => product.id !== id);
    setProducts(productFilter);
  };

  const clear = () => {
    setProducts([]);
    setQuantityProducts(0);
  };
  return (
    <Provider
      value={{ products, addProduct, deleteProduct, clear, quantityProducts }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
