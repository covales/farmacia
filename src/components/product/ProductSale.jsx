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
import { helpHttp } from "../../helpers/helpHttp";

const ProductSale = () => {
  const [productos, setProductos] = useState([]);
  const [productoscopy, setProductosCopy] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [productadd, setProductadd] = useState([]);
  const [venta, setVenta] = useState([]);

  let api = helpHttp();
  let urlProductos = "http://localhost:5000/productos";
  let urlVentas = "http://localhost:5000/ventas";

  const getPoduct = () => {
    helpHttp()
      .get(urlProductos)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setProductos(res);
          setProductosCopy(res);
        } else {
          setProductos(null);
        }
      });
  };

  const handleInputChange = (quantity, index) => {
    let clone = [...cantidad];
    clone[index] = quantity;
    setCantidad(clone);
  };

  const limpiarProductAdd = () => {
    setProductadd([]);
  };

  function addProduct(idProduct, index) {
    const producto = productos.find((p) => p.id === idProduct);
    let key = producto.id;
    //console.log(item);
    if (
      cantidad[index] <= 0 ||
      cantidad[index] == undefined ||
      cantidad[index] == "" ||
      isNaN(cantidad[index])
    ) {
      alert("ingrese la cantidad del producto que quiere agregar");
    } else if (producto) {
      const prod = {
        id: key,
        nombre: producto.medicamentoPresentacion,
        cantidadP: parseInt(cantidad[index]),
        precio: producto.pVenta,
        stockAnterior: producto.cantidad,
        stockActual: producto.cantidad - parseInt(cantidad[index]),
        subTotal: producto.pVenta * cantidad[index]?.toString(),
      };
      // console.log(prod);

      if (prod.stockAnterior < prod.cantidadP) {
        alert("el Stock es menor a la cantidad ingresada");
      } else {
        let productoAgregado = productadd.find((pa) => pa.id === key);
        if (productoAgregado) {
          console.log(productoAgregado);
          let idProductoAgregado = productoAgregado.id;
          setProductadd(
            productadd.map((padd) =>
              padd.id === idProductoAgregado
                ? {
                    ...padd,
                    cantidadP:
                      parseInt(padd.cantidadP) + parseInt(cantidad[index]),
                  }
                : padd
            )
          );
        } else {
          setProductadd([...productadd, prod]);
        }

        setProductos(
          productos.map((p) =>
            p.id === key ? { ...p, cantidad: prod.stockActual } : p
          )
        );
      }

      //productadd.push(prod);
    }
  }

  const borrarUno = (itemProduct) => {
    // console.log(itemProduct);
  };

  const borrarTodo = () => {
    if (productadd == "") {
      alert("no hay datos para borrar");
    } else if (productadd) {
      setProductos(productoscopy);
    }
    setProductadd([]);
  };

  const regVenta = () => {
    if (productadd == "") {
      alert("Agrege uno o mas productos para vender");
    } else if (productadd) {
      let total = 0;
      let productUpdate=null;
      productadd.map((p) => {
        total += parseInt(p.cantidadP) * parseInt(p.precio);
        productUpdate= p.id;

      });

      const v = {
        id: Date.now(),
        fecha: Date(),
        productos: productadd,
        totanVenta: total,
      };
      let options = {
        body: v,
        headers: { "content-type": "application/json" },
      };
      api.post(urlVentas, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let endpoit = `${urlProductos}/${productUpdate}`;
          let optionsUpdate = {
            body: productos,
            headers: { "content-type": "application/json" },
          };
          api.put(endpoit,optionsUpdate).then((res)=>{
            
          })

          alert("Venta registrada exitosamente");
          console.log(productadd);
          limpiarProductAdd();
        } else {
          alert("No se pudo registrar la venta");
        }
      });
    }
  };

  //console.log(productadd);
  useEffect(() => {
    getPoduct();
  }, [urlProductos]);

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
          borraruno={borrarUno}
          regventa={regVenta}
        />
      </div>
    </div>
  );
};

export default ProductSale;
