import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, stock, imgProducts } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={imgProducts} alt={title} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <Link to={`/detail/${item.id}`} className="btn btn-gray ">
          Ver detalles del producto
        </Link>
        <p className="card-text">{`${stock} en Stock`}</p>
      </div>
    </div>
  );
};

export default Item;
