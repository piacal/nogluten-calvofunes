import { useEffect } from "react";
import { useState } from "react";
import { getProd } from "./Producto";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getProd()
      .then((res) => {
        setProducto(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemDetail key={producto.id} producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
