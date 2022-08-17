import React, { useContext } from "react";
import { cartContext } from "../../src/components/contexts/CartContext";
import { Link } from "react-router-dom";

const Formulario = () => {
  const { totalPrice, sendOrder, clear } = useContext(cartContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input) => input.value);
    sendOrder(totalPrice(), {
      name: data[0],
      mail: data[1],
      phone: data[2],
    });
    setTimeout(clear, 1000);
  };

  return (
    <>
      <h2 style={stylesFormulario.h2}>
        COMPLETE EL SIGUIENTE FORMULARIO PARA FINALIZAR LA COMRPA
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={stylesFormulario.container} class="col">
          <label>Nombre completo:</label>
          <input type="text" />
          <label>Mail:</label>
          <input type="email" />
          <label>Número de telefono:</label>
          <input type="number" />
          <button
            style={stylesFormulario.buttonSend}
            type="submit"
            class="btn "
          >
            ENVIAR
          </button>
          <Link to="/Cart">
            <button style={stylesFormulario.buttonBack} class="btn">
              VOLVER AL CARRITO
            </button>
          </Link>
          <Link to="/">
            <button style={stylesFormulario.buttonSend} class="btn">
              VOLVER AL INICIO
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Formulario;

const stylesFormulario = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px",
    padding: "20px",
  },
  buttonSend: {
    margin: "30px",
    width: "150px",
    height: "50px",
    backgroundColor: "rgb(54, 54, 54)",
    color: "white",
    fontSize: "15px",
  },
  buttonBack: {
    width: "150px",
    height: "30px",
    backgroundColor: "grey",
    color: "white",
    fontSize: "10px",
  },
  h2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px",
    color: "grey",
  },
};
