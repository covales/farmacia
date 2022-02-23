import React, { useState } from "react";

const FormEditProduct = ({ dataEdit, setEdit, api, urlProductos,setdataProduct,dataProduct }) => {
  let {
    id,
    medicamentoPresentacion,
    fVencimiento,
    cantidad,
    pVenta,
    modoVenta,
    laboratorio,
    ubicacion,
  } = dataEdit;
 
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEdit({ ...dataEdit, [id]: value });
  };

  const handleSubmit = (e) => {
    let endpoit = `${urlProductos}/${id}`;
    let optionsUpdate = {
      body: dataEdit,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoit, optionsUpdate).then((res) => {
      //console.log(res);
      if (res) {
        alert("Producto actualizado exitosamente");
        let newData = dataProduct.map(p => p.id === id?res:p);
        setdataProduct(newData);
      } else {
        alert("Ocurrio un error durante la actualización");
      }
    });
    return;
  };

  return (
    <form className="row g-3">
      <div className="col-md-2">
        <label htmlFor="id" className="form-label text-primary">
          id
        </label>
        <input
          type="text"
          className="form-control text-center"
          id="id"
          placeholder={id}
          disabled
        />
      </div>
      <div className="col-md-10">
        <label htmlFor="medicamentoPresentacion" className="form-label text-primary">
          Nombre y Presentación
        </label>
        <input
          type="text"
          className="form-control text-success text-center"
          id="medicamentoPresentacion"
          value={medicamentoPresentacion}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-9">
        <label htmlFor="fVencimiento" className="form-label text-primary">
          Fecha de Vencimiento
        </label>
        <input
          type={new Date()}
          className="form-control text-success text-center"
          id="fVencimiento"
          value={fVencimiento}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-3">
        <label htmlFor="cantidad" className="form-label text-primary">
          Cantidad
        </label>
        <input
          type="text"
          className="form-control text-success text-center"
          id="cantidad"
          value={cantidad}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-4">
        <label htmlFor="pVenta" className="form-label text-primary">
          Precio de Venta
        </label>
        <input
          type="text"
          className="form-control text-success text-center"
          id="pVenta"
          value={pVenta}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="modoVenta" className="form-label text-primary">
          Modo de Venta
        </label>
        <input
          type="text"
          className="form-control text-success text-center "
          id="modoVenta"
          value={modoVenta}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="laboratorio" className="form-label text-primary">
          Laboratorio
        </label>
        <input
          type="text"
          className="form-control text-success text-center"
          id="laboratorio"
          value={laboratorio}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-12">
        <label htmlFor="ubicacion" className="form-label text-primary">
          Ubicación
        </label>
        <input
          type="text"
          className="form-control text-success text-center"
          id="ubicacion"
          value={ubicacion}
          onChange={handleInputChange}
        />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Cerrar
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
          data-bs-dismiss="modal"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default FormEditProduct;
