import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, stock, imgProducts } = item;
  return (
    <div className="card" style={styleItem.container}>
      <img className="card-img" src={imgProducts} alt={title} />
      <div className="card-body">
        <h5 style={styleItem.h5}>{title}</h5>
        <p style={styleItem.infoText}>Precio ${price}</p>
        <p style={styleItem.infoText}>{`${stock} en Stock`}</p>

        <Link
          to={`/detail/${item.id}`}
          style={styleItem.buttonDetail}
          className="btn btn-gray "
        >
          Ver detalles del producto
        </Link>
      </div>
    </div>
  );
};

export default Item;

const styleItem = {
  container: {
    width: "15rem",
    high: "15rem",
    margin: "10px",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
  },

  h5: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    justifyContent: "center",
  },
  infoText: {
    marging: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "15px",
  },
  buttonDetail: {
    width: "150px",
    height: "60px",
    backgroundColor: "rgb(145, 143, 143)",
    color: "white",
    fontSize: "15px",
    margin: "15px",
  },
};
