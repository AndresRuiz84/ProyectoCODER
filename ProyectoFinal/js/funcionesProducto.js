

const listaProductos = [
    {
      id: 1,
      nombre: "Laptop",
      precioCompra: "800",
      precioVenta: "1100",
      cantidad: 2,
    },
    {
      id: 2,
      nombre: "PC",
      precioCompra: "900",
      precioVenta: "1500",
      cantidad: 3,
    },
    {
      id: 3,
      nombre: "Impresora",
      precioCompra: "500",
      precioVenta: "800",
      cantidad: 5,
    },
    { id: 4, nombre: "USB", precioCompra: "25", precioVenta: "30", cantidad: 50 },
  ];
  
  const contenedorProductos = document.getElementById("contenedor-productos");
  
  for (const producto of listaProductos) {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3 ";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
        <div class="card">
            <div class="card-body">
            <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
            <p class="card-text">Precio compra: <b>${producto.precioCompra}</b></p>
            <p class="card-text">Precio venta: <b>${producto.precioVenta}</b></p>
            <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
            </div>
        </div>`;
  
    contenedorProductos.append(column);
  }