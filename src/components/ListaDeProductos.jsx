import Items from "./Data/Items";

function ListaDeProductos({ agregarAlCarrito }) {
  return (
    <div className="container">
      <h1>Lista de Productos</h1>
      <ul className="list-group">
        {Items.map((item) => (
          <li
            key={item.id}
            className="list-group-item"
            onClick={() => agregarAlCarrito(item)}
          > 
            {item.name} - ${item.unitPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeProductos;
