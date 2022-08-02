import React from "react";
import { Link } from "react-router-dom";
import categories from "./elementosNavBar";

const CartWidgetIcono = () => {
  return (
    <>
      <Link to="/" key={categories.id}>
        <img
          width="150px"
          src="https://doñabolacha.com/wp-content/uploads/Consejos-y-T%C3%A9cnicas.jpg"
          alt="nogluten"
        />
      </Link>
    </>
  );
};

export default CartWidgetIcono;
