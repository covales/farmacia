import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Header from "../header/Header";
import Search from "../search/Search";
import Scroll from "react-scroll";

const ProductSale = () => {
  const [productos, setProductos] = useState([]);
  const [productadd, setProductadd] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [venta, setVenta] = useState([]);
  var total = 0;
  var Element = Scroll.Element;

  const getProductos = () => {
    setProductos(data);
  };

  const handleInputChange = (quantity, index) => {
    console.log(quantity);
    let clone = [...cantidad];
    clone[index] = quantity;

    setCantidad(clone);

    // console.log(typeof(clone) );
  };
  const limpiar = (e)=>{
    setProductadd([]);
    
  };

  const addProduct = (itemProduct, index) => {
    const item = productos.find((productos) => productos.item === itemProduct);

    if (item) {
      const prod = {
        nombre: item.medicamentoPresentacion,
        cantidadP: cantidad[index],
        precio: item.pVenta,
        subTotal: item.pVenta * cantidad[index]?.toString(),
      };
      console.log(prod.cantidadP);
      if (prod.cantidadP <= 0 || prod.cantidadP == undefined ) {
        alert("ingrese un numero");
      }else{
       
        setProductadd([...productadd, prod]);
      } 
      return;      
    }       
    
    // productadd.push(item);
    //console.log(productadd);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container-fluid">
      <Header></Header>

      <div className="row pt-3 ">
        <h3 className="text-center pt-5">VENDER PRODUCTOS</h3>

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
              <thead className="card-header table-info">
                <tr>
                  <th scope="col">
                    Productos
                    <span className="p-1">
                      <input
                        type="search"
                        placeholder="Buscar producto..."
                        aria-label="Search"
                      />
                    </span>
                  </th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                {productos &&
                  productos.map((p, index) => {
                    return (
                      <tr key={index}>
                        <td>{p.medicamentoPresentacion}</td>
                        <td>{p.pVenta}</td>
                        <td>
                          <input
                            type="number"
                            placeholder="Ingrese un número"
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
                            onClick={() => addProduct(p.item, index)}
                          >
                            Agregar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Element>
        </div>

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
                  (total += parseInt(p.cantidadP) * p.precio),
                  (
                    <tr key={index}>
                      <td>{p.nombre}</td>
                      <td>{p.cantidadP}</td>
                      <td>{p.subTotal}</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          eliminar
                        </button>
                      </td>
                    </tr>
                  )
                )
              )}

              <tr className="table-warning">
                <td colSpan="3">Total</td>
                <td className="">{total}</td>
              </tr>
            </tbody>
          </table>
          <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" className="btn btn-primary">
              Vender
            </button>
            <button type="button" className="btn btn-primary" onClick={limpiar}>
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSale;
