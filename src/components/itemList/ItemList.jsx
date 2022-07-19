import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {props.items.map((item) => (
            <div key={item.id} className="col-sm">
              <Item key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
