import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import db from "../../data/firebaseConfig"

const initialStateValues = {
    nombreProducto: '',
    presentacion: '',
    laboratorio: '',
    stock: '',
    fCompra: '',
    fVencimiento: '', //FECHA DE VENCIMIENTO   
    pCompra: '',
    pVenta: '',  //PRECIO DE VENTA
    modoVenta: '',
    ubicacion: '',



}

const FormAddProduct = () => {

    const [producto, setProducto] = useState([initialStateValues]);

    const handleInputChange = e => {
        const { id, value } = e.target;
        setProducto({ ...producto, [id]: value });
        //console.log(addProducto);
    }

    const registrarProducto = async (objProducto) => {
        //console.log(objProducto);
        await addDoc(collection(db, "productos"), objProducto);
        console.log("registro exitoso");
    }

    const handleSubmit = e => {

        registrarProducto(producto);
        setProducto({ ...initialStateValues });
    }

    return (

        <div>
            <div className="mb-2 row">
                <label htmlFor="nombreProducto" className="col-sm-5 col-form-label col-form-label-sm">Nombre del producto</label>
                <div className="col-sm-5">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nombreProducto"
                        onChange={handleInputChange}
                        value={producto.nombreProducto}
                    />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="presentacion" className="col-sm-5 col-form-label col-form-label-sm">Presentacion</label>
                <div className="col-sm-5">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="presentacion"
                        onChange={handleInputChange}
                        value={producto.presentacion}
                    />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="laboratorio" className="col-sm-5 col-form-label col-form-label-sm">Laboratorio</label>
                <div className="col-sm-5">
                    <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    id="laboratorio" 
                    onChange={handleInputChange}
                    value={producto.laboratorio}
                    />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="stock" className="col-sm-5 col-form-label col-form-label-sm">Stock</label>
                <div className="col-sm-5">
                    <input 
                    type="number" 
                    className="form-control form-control-sm" 
                    id="stock" 
                    onChange={handleInputChange}
                    value={producto.stock}
                    />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="fCompra" className="col-sm-5 col-form-label col-form-label-sm">Fecha de compra</label>
                <div className="col-sm-5">
                    <input 
                    type="date" 
                    className="form-control form-control-sm" 
                    id="fCompra" 
                    onChange={handleInputChange}
                    value={producto.fCompra}
                    />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="fVencimiento" className="col-sm-5 col-form-label col-form-label-sm">Fecha de vencimiento</label>
                <div className="col-sm-5">
                    <input 
                    type="date" 
                    className="form-control form-control-sm" 
                    id="fVencimiento" 
                    onChange={handleInputChange}
                     />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="pCompra" className="col-sm-5 col-form-label col-form-label-sm">Precio de compra</label>
                <div className="col-sm-5">
                    <input type="number" className="form-control form-control-sm" id="pCompra" onChange={handleInputChange} />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="pVenta" className="col-sm-5 col-form-label col-form-label-sm">Precio de venta</label>
                <div className="col-sm-5">
                    <input type="number" className="form-control form-control-sm" id="pVenta" onChange={handleInputChange} />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="modoVenta" className="col-sm-5 col-form-label col-form-label-sm">Modo de venta</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control form-control-sm" id="modoVenta" onChange={handleInputChange} />
                </div>
            </div>

            <div className="mb-2 row">
                <label htmlFor="ubicacion" className="col-sm-5 col-form-label col-form-label-sm">Ubicaci??n</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control form-control-sm" id="ubicacion" onChange={handleInputChange} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-success" onClick={handleSubmit}>Guardar</button>
            </div>
        </div>


    )
}

export default FormAddProduct
