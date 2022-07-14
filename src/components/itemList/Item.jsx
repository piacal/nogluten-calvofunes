const Item = ({ item }) => {
  const { title, price, stock, imgProducts } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={imgProducts} alt={title} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <a href="google.com" className="btn btn-gray ">
          Ver detalles del producto
        </a>
        <p className="card-text">{`${stock} en Stock`}</p>
      </div>
    </div>
  );
};

export default Item;
