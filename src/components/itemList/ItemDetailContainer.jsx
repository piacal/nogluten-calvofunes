import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../itemList/ItemDetail";
import { useParams } from "react-router-dom";
import ItemDataBase from "../dataBase/ItemData";

const ItemDetailContainer = () => {
  const [product, setProducto] = useState({});

  const { id } = useParams();

  let getProd = new Promise((resolve, reject) => {
    const findProduct = ItemDataBase.find(
      (ItemDataBase) => ItemDataBase.id === Number(id)
    );
    setTimeout(() => {
      resolve(findProduct);
    }, 1000);
  });

  useEffect(() => {
    getProd
      .then((res) => {
        setProducto(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
