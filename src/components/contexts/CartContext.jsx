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
    return products.some((product) => product.id === id);
  };

  const calcularTotal = () => {
    return products.reduce(
      (acum, actual) => acum + actual.price * actual.quantity,
      0
    );
  };

  const addProduct = (product) => {
    if (isInCart(product.id)) {
      const updatedProducts = products.map((prod) =>
        prod.id === product.id
          ? { ...prod, quantity: prod.quantity + product.quantity }
          : prod
      );
      /* const found = product.find((p) => p.id === product.id);
      const index = product.indexOf(found);
      const arrAux = [...product];
      arrAux[index].quantity += product.quantity;
      setProducts(arrAux); */
    } else {
      setProducts((prevState) => [...prevState, product]);
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
      value={{
        products,
        addProduct,
        deleteProduct,
        clear,
        quantityProducts,
        calcularTotal,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
