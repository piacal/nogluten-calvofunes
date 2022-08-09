import React, { createContext, useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  writeBatch,
  documentId,
} from "firebase/firestore";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(0);

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: products,
      total: totalPrice,
      buyer: buyerData,
      date: new Date(),
    };
    /* addDoc(orderCollection, order).then((res) =>
      alert(`Su numero de orden es: ${res.id}`)
    );
 */
    const batch = writeBatch(db);
    const idList = products.map((product) => product.id);
    const withoutStock = [];
    const collectionRef = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = products.find((prod) => prod.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Su número de orden es: ${addResponse.id}`);
    } else {
      alert("La compra no pudo completarse, no hay stock suficiente");
    }
  };

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

  const totalPrice = () => {
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
        totalPrice,
        sendOrder,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
