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
          <thead className="sticky-top bg-info">
            <tr>
              <th scope="col">Producto</th>
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
                    <td>{p.medicamentoPresentacion}<span class="badge bg-secondary">{p.cantidad}</span></td>
                    <td className="text-center">{p.pVenta}</td>
                    <td className="text-center">{p.ubicacion}</td>
                    <td>
                      <input
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
