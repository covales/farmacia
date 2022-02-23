import React, { useState, useEffect } from "react";

const ListProductAddSale = ({
  productadd,
  borrartodo,
  limpiarproductadd,
  borraruno,
  regventa,
}) => {
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
            <th scope="col" className="text-center">Cantidad</th>
            <th scope="col" className="text-center">Sub Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="card-body ">
          {productadd.map(
            (p, index) => (
              (total += parseInt(p.cantidadP) * parseInt(p.precio)),
              (
                <tr key={index}>
                  <td className="text-success fst-italic">{p.nombre}</td>
                  <td className="text-center text-dark fw-bold">{p.cantidadP}</td>
                  <td className="text-center text-primary fw-bold">{p.subTotal}</td>
                  <td>
                    <button className="btn btn-outline-warning" onClick={()=>borraruno(p.id)}>
                      <span className="text-danger">Eliminar</span>
                    </button>
                  </td>
                </tr>
              )
            )
          )}
          <tr className="table-danger">
            <td colSpan="3" className="fw-bold">Total</td>
            <td className="fw-bold fs-5 text-primary">{total} bs</td>
          </tr>
        </tbody>
      </table>
      <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={regventa}
        >
          Vender
        </button>

        <button type="button" className="btn btn-danger" onClick={borrartodo}>
          borrar
        </button>
      </div>
    </div>
  );
};

export default ListProductAddSale;
