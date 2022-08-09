import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, stock, imgProducts } = item;
  return (
    <div style={styleItem.container}>
      <img className="card-img" src={imgProducts} alt={title} />

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
  );
};

export default Item;

const styleItem = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    high: "50px",
    weight: "20px",
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
    alignItems: "left",
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
