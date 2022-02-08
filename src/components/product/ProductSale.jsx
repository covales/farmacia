import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Header from "../header/Header";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  collectionGroup,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import db from "../../data/firebaseConfig";
import ListProducSale from "./ListProducSale";
import ListProductAddSale from "./ListProductAddSale";

const ProductSale = () => {
  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [productadd, setProductadd] = useState([]);

  const getPoduct = () => {
    setProductos(data);
  };

  const handleInputChange = (quantity, index) => {
    let clone = [...cantidad];
    clone[index] = quantity;
    setCantidad(clone);
  };

  const limpiarProductAdd = () => {
    setProductadd([]);
  };

  function addProduct(itemProduct, index) {
    const item = data.find((productos) => productos.id === itemProduct);
    //const udpateProduct = doc(db, "dataProduct", item.id);
    // console.log(index,itemProduct);
    if (
      cantidad[index] <= 0 ||
      cantidad[index] == undefined ||
      cantidad[index] == "" ||
      isNaN(cantidad[index])
    ) {
      alert("ingrese la cantidad del producto que quiere agregar");
    } else if (item) {
      const prod = {
        id: item.id,
        fecha: Date(),
        nombre: item.medicamentoPresentacion,
        cantidadP: cantidad[index],
        precio: item.pVenta,
        stockAnterior: item.cantidad,
        stockActual: item.cantidad - parseInt(cantidad[index]),
        subTotal: item.pVenta * cantidad[index]?.toString(),
      };
      //console.log(prod.total);
      if (prod.stock < prod.cantidadP) {
        alert("el Stock es menor a la cantidad ingresada");
      } else {
        setProductadd([...productadd, prod]);
        let key = item.id;
        setProductos(
          productos.map((p) =>
            p.id === key ? { ...p, cantidad: prod.stockActual } : p
          )
        );
      }
      productadd.push(prod);
    }
  }

  const handleRemoveAdd = (itemProduct) => {
    console.log(itemProduct);
 
    
  };

  const borrarTodo = () => {
    if (productadd == "") {
      alert("no hay datos para borrar");
    }
    else if (productadd) {
   setProductos(data)
    }
    setProductadd([]);
  };
  //console.log(productadd);
  useEffect(() => {
    getPoduct();
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
        <ListProducSale
          data={productos}
          addProduct={addProduct}
          handleInputChange={handleInputChange}
        />
        <ListProductAddSale
          productadd={productadd}
          borrartodo={borrarTodo}
          limpiarproductadd={limpiarProductAdd}
          borraruno={handleRemoveAdd}
        />
      </div>
    </div>
  );
};

export default ProductSale;
