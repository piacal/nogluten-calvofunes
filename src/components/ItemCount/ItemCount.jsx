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
    <>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text center w-full mb-12">
          <h1 className="sm:text-3x1 text-2x1 font-bold title-font mb">
            Comprar
          </h1>
          <div>
            <div>
              <button
                className="btn btn-icon btn-primary"
                type="button"
                onClick={resta}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className="btn btn-icon btn-primary"
                type="button"
                onClick={suma}
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => clickToAdd()}
                type="button"
                className="btn btn-info"
              >
                Agregar al carrtio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
