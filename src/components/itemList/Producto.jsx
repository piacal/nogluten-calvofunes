const producto = {
  id: 1,
  title: "Premezcla",
  price: 200,
  category: "Almacen",
  stock: 4,
  imgProducts: "/imgs/Premezcla.png",
  description: "Lorem Lorem .......................................",
};

export const getProd = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(producto);
    }, 1000);
  });

export default producto;
