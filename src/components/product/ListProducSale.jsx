import React, { useState, useEffect } from "react";
import Scroll from "react-scroll";
var Element = Scroll.Element;

const ListProducSale = ({ data, addProduct, handleInputChange }) => {
  return (
    <div className="col-md-6 card ">
      <Element
        name="test7"
        className="element"
        id="containerElement"
        style={{
          position: "relative",
          height: "500px",
          width: "auto",
          overflow: "scroll",
        }}
      >
        <table className="table">
          <thead className="sticky-top table-danger">
            <tr>
              <th scope="col"> Stock/Producto</th>
              <th scope="col" className="text-center">Precio</th>
              <th scope="col" className="text-center">Ubicación</th>
              <th scope="col" className="text-center">Cantidad</th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td className="text-center">
                  <div className="spinner-border text-danger  " role="status">
                    <span className="sr-only "></span>
                  </div>
                  <span className="d-flex text-danger  ">cargando...</span>
                </td>
                <td className="text-center">
                  <div className="spinner-border text-danger " role="status">
                    <span className="sr-only"></span>
                  </div>
                  <span className="d-flex text-danger ">cargando...</span>
                </td>
                <td className="text-center">
                  <div className="spinner-border text-danger " role="status">
                    <span className="sr-only"></span>
                  </div>
                  <span className="d-flex text-danger ">cargando...</span>
                </td>
                <td className="text-center">
                  <div className="spinner-border text-danger " role="status">
                    <span className="sr-only"></span>
                  </div>
                  <span className="d-flex text-danger ">cargando...</span>
                </td>
                <td className="text-center">
                  <div className="spinner-border text-danger " role="status">
                    <span className="sr-only"></span>
                  </div>
                  <span className="d-flex text-danger ">cargando...</span>
                  
                </td>
              </tr>
            ) : (
              data.map((p, index) => {
                return (
                  <tr key={index}>
                    <td className="text-success fst-italic"><span className="badge bg-danger me-3">{p.cantidad}</span>{p.medicamentoPresentacion}</td>
                    <td className="text-center fst-italic text-primary">{p.pVenta} bs</td>
                    <td className="text-center fw-bold text-danger">{p.ubicacion}</td>
                    <td>
                      <input
                      className="border border-success form-control form-control-sm"
                        type="number"
                        placeholder="0"
                        id={`quantity_${index}`}
                        name="quantity"
                        onChange={(e) =>
                          handleInputChange(e.target.value, index)
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        onClick={() => addProduct(p.id, index)}
                      >
                        Agregar
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </Element>
    </div>
  );
};

export default ListProducSale;
