import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Header from "../header/Header";
import Search from "../search/Search";
import Scroll from "react-scroll";
import { addDoc, collection } from "firebase/firestore";
import db from "../../data/firebaseConfig";


const ProductSale = () => {

  const [productos, setProductos] = useState([]);
  const [productadd, setProductadd] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [venta, setVenta] = useState([]);
  const [montoVenta, setmontoVenta] = useState(0);
  var total = 0;
  var Element = Scroll.Element;

  const getProductos = async () => {

    const unsub = onSnapshot(collection(db, "dataProduct"), (snapshot)=>{
      const docs = [];
      snapshot.forEach((doc)=>{
          docs.push({...doc.data(), id: doc.id})
      });
      setProductos(docs);
      
  });
  
  return unsub;
  }

  const handleInputChange = (quantity, index) => {
    //console.log(quantity);
    let clone = [...cantidad];
    clone[index] = quantity;
    setCantidad(clone);
    // console.log(typeof(clone) );
  };
  const limpiar = (e) => {
    setProductadd([]);
  };

  const addProduct = (itemProduct, index) => {
    
    const item = productos.find((productos) => productos.item === itemProduct);

    if (item) {
      const prod = {
        fecha: Date(),
        nombre: item.medicamentoPresentacion,
        cantidadP: cantidad[index],
        precio: item.pVenta,
        stock: item.cantidad,
        subTotal: item.pVenta * cantidad[index]?.toString(),
        total: ( total+= parseInt(cantidad[index]) * item.pVenta)
      };
      console.log(prod.total);
      if (prod.cantidadP <= 0 || prod.cantidadP == undefined) {
        alert("ingrese la cantidad del producto que quiere agregar");
      } else if (prod.stock < prod.cantidadP) {
        alert("el Stock es menor a la cantidad ingresada");
      } else {
        setProductadd([...productadd, prod]);
      }
      setCantidad([]);
      productadd.push(prod);
     // console.log(productadd);
    }

   return;
    //console.log(productadd);
  };

  const registrarVenta = async(objVenta) => {
    
    await addDoc(collection(db, "ventas"), objVenta);
    alert("registro exitoso"); 

   
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    registrarVenta({productadd});
    limpiar();
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container-fluid">
      <Header></Header>

      <div className="row pt-3 ">
        <h3 className="text-center pt-5">
          <span className="p-1">
            <input
              type="search"
              placeholder="Buscar producto..."
              aria-label="Search"
            />
          </span>
          VENDER PRODUCTOS
        </h3>

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
                  <th scope="col">Productos</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Stock</th>
                  <th scope="col" className="text-center">
                    Cantidad
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                {productos &&
                  productos.map((p, index) => {
                    return (
                      <tr key={index}>
                        <td>{p.medicamentoPresentacion}</td>
                        <td className="text-center">{p.pVenta}</td>
                        <td className="text-center">{p.cantidad}</td>
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
                          Eliminar
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
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
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
