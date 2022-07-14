import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemDataBase from "../dataBase/ItemData";

function ItemListContainer(props) {
  let [items, setItems] = useState([]);

  console.log(items);
  //El useEffect toma un callback como primero parametro, una funcion y como segundo parametro un ARRAY
  useEffect(() => {
    let promiseItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ItemDataBase);
      }, 2000);
    });

    promiseItems
      .then((respuesta) => {
        setItems(ItemDataBase);
      })
      .catch((errorMsg) => console.log(errorMsg));
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
