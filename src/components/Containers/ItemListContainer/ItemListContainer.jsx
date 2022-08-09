import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner from "../../spinner/spinner";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //PARAMETRO PARA ENCONTRAR LA CATERGORIA DE LOS PRODUCTOS Y PODER FILTRARLOS
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const filterCollection = categoryId
      ? query(itemsCollection, where("category", "==", categoryId))
      : itemsCollection;
    getDocs(filterCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
