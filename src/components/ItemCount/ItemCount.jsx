import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  function suma() {
    if (count < stock) setCount(count + 1);
  }

  function resta() {
    if (count > initial) setCount(count - 1);
  }

  function clickToAdd() {
    onAdd(count);
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>COMPRAR</h1>
      <div style={styles.containerButtons}>
        <div>
          <button style={styles.button} onClick={resta}>
            -
          </button>
          <span>{count}</span>
          <button style={styles.button} onClick={suma}>
            +
          </button>
        </div>
        <div>
          <button style={styles.buttonAdd} onClick={() => clickToAdd()}>
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "40px",
    height: "40px",
    borderRadius: "15%",
    backgroundColor: "rgb(54, 54, 54)",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    margin: "7px",
  },
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAdd: {
    width: "150px",
    height: "50px",
    backgroundColor: "rgb(54, 54, 54)",
    color: "white",
    fontSize: "15px",
    margin: "15px",
  },
  h1: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
  },
};
