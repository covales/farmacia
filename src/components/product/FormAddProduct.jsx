import React from 'react'

const initialStateValues = {
    laboratorio: '',
    nombreMedicamento: '',
    presentacion: '',
    fVencimiento: '', //FECHA DE VENCIMIENTO
    cantidad: '',
    pVenta: '',
    vitrina: '',
    foto: '',

    //PRECIO DE VENTA
}

const FormAddProduct = () => {
    return (
        <div>
            <div>
                
                <div className="mb-3 row">
                    <label htmlFor="laboratorio" className="col-sm-2 col-form-label col-form-label-sm">Laboratorio</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="laboratorio"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="nombreMedicamento" className="col-sm-2 col-form-label col-form-label-sm">Nombre del producto</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="nombreMedicamento"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="presentacion" className="col-sm-2 col-form-label col-form-label-sm">Presentacion</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="presentacion"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="fVencimiento" className="col-sm-2 col-form-label col-form-label-sm">Fecha vencimiento</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="fVencimiento"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="cantidad" className="col-sm-2 col-form-label col-form-label-sm">Cantidad</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="cantidad"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="pVenta" className="col-sm-2 col-form-label col-form-label-sm">Precio de venta</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="pVenta" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="vitrina" className="col-sm-2 col-form-label col-form-label-sm">Vitrina </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" id="vitrina"  />
                    </div>
                </div>
                     


            </div>

        </div>
    )
}

export default FormAddProduct
