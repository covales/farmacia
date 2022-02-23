import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Search from "../search/Search";
import db from "../../data/firebaseConfig";
import {
  collection,
  doc,
  DocumentSnapshot,
  getDocs,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { helpHttp } from "../../helpers/helpHttp";

const ListProduct = () => {

  const [productos, setProductos] = useState([]);
  const [productsearch, setProductsearch] = useState([]);

 // let api = helpHttp();
  let urlProductos = "http://localhost:5000/productos";

  const getProductos = async () => {
    //Para traer los datos desde firebase
    // const unsub = onSnapshot(collection(db, "dataProduct"), (snapshot) => {
    //   const docs = [];
    //   snapshot.forEach((doc) => {
    //     docs.push({ ...doc.data(), id: doc.id });
    //   });
    //   setProductos(docs);
    //   setProductsearch(docs);
    // });

    //PARA TRAER LOS DATOS DESDE JSON-SERVER
    helpHttp()
    .get(urlProductos)
    .then((res) => {
      //console.log(res);
      if (!res.err) {
        setProductos(res);   
        setProductsearch(res);     
      } else {
        setProductos(null);
      }
    });    
     
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = [];
    const limite = productsearch.length;

    for (let index = 0; index < limite; index++) {
      const nombreProducto =
        productsearch[index].medicamentoPresentacion?.toLowerCase();
      //console.log(nombreProducto);
      const patt = new RegExp(terminoBusqueda);
      const res = patt.test(nombreProducto);

      if (res) {
        resultadoBusqueda.push(productsearch[index]);
      }
    }

    setProductos(resultadoBusqueda);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="row pt-5">
      <div className="row sticky-top pt-5">
        <div className="col-12">
          <p></p>
          <Search filtro={filtrar} />
        </div>
      </div>

      <div className="row pt-4">
        {productos.length === 0 ? (
         <div className="text-center">
         <div className="spinner-border" role="status">
           <span className="sr-only"></span>
         </div>
         <h4>Cargando</h4>
       </div>
        ) : (
          productos.map((producto) => {
            return (
              <div className="col-4 text-center" key={producto.id}>
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="40"
                  height="40"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#35753e" />
                  <text x="10%" y="50%" fill="#fff" dy=".3em">
                    {producto.pVenta}bs
                  </text>
                </svg>
                <h6 className="text-primary ">
                  {producto.medicamentoPresentacion}
                </h6>
                <p>
                  <b className="me-2">Stock:</b> {producto.cantidad}
                  <br />
                  <span className="text-success">
                    {" "}
                    <b> Ubicación: {producto.ubicacion}</b>{" "}
                  </span>
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ListProduct;
