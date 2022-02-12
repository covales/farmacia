import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Header from "../header/Header";
import Search from "../search/Search";
import { helpHttp } from "../../helpers/helpHttp";
//import ExportExcel from "react-export-excel";


const Product = () => {
  const [dataProduct, setdataProduct] = useState([]);
  let api = helpHttp();
  let urlProductos = "http://localhost:5000/productos";
  

  const getDataProduct = () => {
    helpHttp()
      .get(urlProductos)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setdataProduct(res);
        } else {
          setdataProduct(null);
        }
      });
  };
  
  const donwloadExcel=()=>{
    //libro de trabajo
   
    

  };
  

  useEffect(() => {
    getDataProduct();
  }, []);

  return (
    <>
      <Header />
      <div className="container  pt-5  ">
        <div className="col-md-10 position-fixed pt-3 bg-secondary p-2">
          <div className="row ">
            <div className="col">
             {/*  <Search /> */}
            </div>
            <div className="col">
              <span className="text-white">Total : {dataProduct.length}</span>
            </div>            
            <div className="col">
             <button className="btn btn-success"> <svg                
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-spreadsheet-fill "
                viewBox="0 0 16 16"
              >
                <path d="M6 12v-2h3v2H6z" />
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" />
              </svg>Descargar en excel</button>
              
            </div>
          </div>
        </div>
      </div>

      <div
        className="row pt-5"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example"
      >
        {dataProduct.length === 0 ? (
          <div className="d-flex justify-content-center pt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
            <h3>Cargando Productos</h3>
          </div>
        ) : (
          dataProduct.map((dp) => {
            return (
              <div
                className="col-md-3 text-center pt-5"
                key={dp.id}
                id="navbar-example"
              >
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
                    {dp.pVenta}bs
                  </text>
                </svg>
                <h6>{dp.medicamentoPresentacion}</h6>
                <p>
                  Stock: {dp.cantidad}
                  <br />
                  <span>Ubicación: {dp.ubicacion}</span>
                  <br />
                  <span>Vencimiento: {dp.fVencimiento}</span>
                </p>

                {/* <button type="button" className="btn btn-success btn-sm me-2">
                  editar
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  ocultar
                </button> */}
                <hr />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Product;
