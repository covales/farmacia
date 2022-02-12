import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../../data/firebaseConfig";
import { helpHttp } from "../../helpers/helpHttp";
const initialStateValues = {
  medicamentoPresentacion:" ",
  fVencimiento:" ",
  cantidad:" ",
  pVenta:" ",
  modoVenta:" ",
  laboratorio:" ",
  ubicacion:" "
}

const FormAddProduct = () => {
  const [producto, setProducto] = useState(initialStateValues);
  let urlProductos = "http://localhost:5000/productos";
  let api = helpHttp();


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProducto({ ...producto, [id]: value });
  };

  const registrarProducto = async (objProducto) => {
    //console.log(objProducto);
   /*  await addDoc(collection(db, "productos"), objProducto);
    alert("registro exitoso"); */
    let options = {
      body: objProducto,
      headers: { "content-type": "application/json" },
    };
    api.post(urlProductos,options).then((res)=>{
      if (!res.err){
        alert("Producto registrado exitosamente");
      }else{
        alert("No se a podido registrar el producto");
      }

    })

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarProducto(producto);
    setProducto({ ...initialStateValues });
  };
  
  const limpiar = e =>{
    setProducto({ ...initialStateValues });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 row">
        <p>Los campos marcados con * son obligatorios </p>
        <label
          htmlFor="medicamentoPresentacion"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          * Nombre del producto y presentación
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm"
            id="medicamentoPresentacion"
            onChange={handleInputChange}
            value={producto.medicamentoPresentacion}
            required
          />
          
        </div>
      </div>
      <div className="mb-2 row">
        <label
          htmlFor="fVencimiento"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          * Fecha de vencimiento
        </label>
        <div className="col-sm-5">
          <input
            type="date"
            className="form-control form-control-sm"
            id="fVencimiento"
            onChange={handleInputChange}
            value={producto.fVencimiento}
            required
          />
          
        </div>
      </div>
      <div className="mb-2 row">
        <label
          htmlFor="cantidad"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          * Cantidad
        </label>
        <div className="col-sm-5">
          <input
            type="number"
            className="form-control form-control-sm"
            id="cantidad"
            onChange={handleInputChange}
            value={producto.cantidad}
            required
          />
          
        </div>
      </div>
      <div className="mb-2 row">
        <label
          htmlFor="pVenta"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          * Precio de venta
        </label>
        <div className="col-sm-5">
          <input
            type="number"
            className="form-control form-control-sm"
            id="pVenta"
            onChange={handleInputChange}
            value={producto.pVenta}
            required
          />
          
        </div>
      </div>
      <div className="mb-2 row">
        <label
          htmlFor="modoVenta"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          * Modo de venta
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm"
            id="modoVenta"
            onChange={handleInputChange}
            value={producto.modoVenta}
            required
          />
          
        </div>
      </div>

      <div className="mb-2 row">
        <label
          htmlFor="laboratorio"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          * Laboratorio
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm"
            id="laboratorio"
            onChange={handleInputChange}
            value={producto.laboratorio}
            required
          />
          
        </div>
      </div>

      <div className="mb-2 row">
        <label
          htmlFor="ubicacion"
          className="col-sm-5 col-form-label col-form-label-sm"
        >
          Ubicación
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm"
            id="ubicacion"
            onChange={handleInputChange}
            value={producto.ubicacion}
            required
          />
          
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
          onClick={limpiar}
        >
          Cerrar
        </button>
        <button type="submit" className="btn btn-success" >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default FormAddProduct;
