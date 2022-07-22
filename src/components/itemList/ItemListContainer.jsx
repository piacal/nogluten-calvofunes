import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemDataBase from "../dataBase/ItemData";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  let [items, setItems] = useState([]);

  const { categoryId } = useParams();

  let promiseItems = new Promise((resolve, reject) => {
    const filterProduct = ItemDataBase.filter(
      (ItemDataBase) => ItemDataBase.category === categoryId
    );
    setTimeout(() => {
      categoryId ? resolve(filterProduct) : resolve(ItemDataBase);
    }, 2000);
  });
  //El useEffect toma un callback como primero parametro, una funcion y como segundo parametro un ARRAY
  useEffect(() => {
    promiseItems
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
