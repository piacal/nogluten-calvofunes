import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import ItemDataBase from "../../dataBase/ItemData";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((snapshot) => {
      const data = { id: snapshot.id, ...snapshot.data() };
      setProducto(data);
    });
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
