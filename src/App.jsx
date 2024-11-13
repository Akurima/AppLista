import "./App.css";
import { useState } from "react";
import ListaDeProductos from "./components/ListaDeProductos";
import Carrito from "./components/Carrito";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    let productoEncontrado = false;
    const carritoActualizado = carrito.map((item) => {
      if (item.id === producto.id) {
        productoEncontrado = true;
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });

    if (!productoEncontrado) {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    } else {
      setCarrito(carritoActualizado);
    }
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter((producto) => producto.id !== productoId));
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.unitPrice * producto.cantidad,
      0
    );
  };

  const realizarCompra = () => {
    alert("Compra realizada con éxito!");
    setCarrito([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8">
          <ListaDeProductos agregarAlCarrito={agregarAlCarrito} />
        </div>
        <div className="col-12 col-md-4">
          <Carrito
            carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            total={calcularTotal()}
            realizarCompra={realizarCompra}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
