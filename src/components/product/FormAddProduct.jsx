import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../../data/firebaseConfig";
import { helpHttp } from "../../helpers/helpHttp";
const initialStateValues = {
  medicamentoPresentacion:"",
  fVencimiento:"",
  cantidad:"",
  pVenta:"",
  modoVenta:"",
  laboratorio:"",
  ubicacion:""
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
        <p className="text-success"><span className="fst-italic">Los campos marcados con</span> <span className="fw-bold text-danger">*</span>(asterisco) <span className="fst-italic"> son obligatorios</span> </p>
        <label
          htmlFor="medicamentoPresentacion"
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
        <span className="text-danger fw-bold">*</span> Nombre del producto y presentación
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm border border-success"
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
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
          <span className="text-danger fw-bold">*</span> Fecha de vencimiento
        </label>
        <div className="col-sm-5">
          <input
            type="date"
            className="form-control form-control-sm border border-success"
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
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
          <span className="text-danger fw-bold">*</span> Cantidad/Stock
        </label>
        <div className="col-sm-5">
          <input
            type="number"
            className="form-control form-control-sm border border-success"
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
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
         <span className="text-danger fw-bold">*</span> Precio de venta
        </label>
        <div className="col-sm-5">
          <input
            type="number"
            className="form-control form-control-sm border border-success"
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
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
          Modo de venta
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm border border-success"
            id="modoVenta"
            onChange={handleInputChange}
            value={producto.modoVenta}
           
          />
          
        </div>
      </div>

      <div className="mb-2 row">
        <label
          htmlFor="laboratorio"
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
          <span className="text-danger fw-bold">*</span> Laboratorio
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm border border-success"
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
          className="col-sm-5 col-form-label col-form-label-sm text-primary"
        >
          Ubicación
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-sm border border-success"
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
