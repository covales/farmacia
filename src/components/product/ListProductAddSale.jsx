import React, { useState, useEffect } from "react";

const ListProductAddSale = ({ productadd, borrartodo, limpiarproductadd, borraruno, regventa }) => {
  
  var total = 0;
  

  const handleSubmit = (e) => {
    //e.preventDefault();
    //console.log(productadd);
    if (productadd == "") {
      alert("ingrese el producto a vender");
    } else {
      registrarVenta({ productadd });
    }

    limpiarproductadd;
  };
  const registrarVenta = async (objVenta) => {
    await addDoc(collection(db, "ventas"), objVenta);
    alert("registro exitoso");
  };

  return (
    <div className="col-md-6 card">
      <table className="table ">
        <thead className="card-header table-danger">
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Sub Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="card-body">
          {productadd.map(
            (p, index) => (
              (total += parseInt(p.cantidadP) * parseInt(p.precio)),
              (
                <tr key={index}>
                  <td>{p.nombre}</td>
                  <td>{p.cantidadP}</td>
                  <td>{p.subTotal}</td>
                  <td>
                    <button type="button" className="btn btn-primary" onClick={borraruno(index)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
                
              )
            )
          )}
          <tr>
            <td colSpan="3">Total</td>
            <td className="">{total}</td>
          </tr>
        </tbody>
      </table>
      <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={regventa}
        >
          Vender
        </button>

        <button type="button" className="btn btn-primary" onClick={borrartodo}>
          borrar
        </button>
      </div>
    </div>
  );
};

export default ListProductAddSale;
