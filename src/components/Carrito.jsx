function Carrito({ carrito, eliminarDelCarrito, total, realizarCompra }) {
  return (
    <div className="contenedor-carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {carrito.map((producto) => (
              <li
                key={producto.id}
                className="list-group-item"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                {producto.name} - ${producto.unitPrice} x {producto.cantidad}
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-3">
            <strong>Total: ${total.toFixed(2)}</strong>
            <button className="btn btn-primary" onClick={realizarCompra}>
              Comprar
            </button>{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
