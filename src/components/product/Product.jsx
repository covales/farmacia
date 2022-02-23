import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Header from "../header/Header";
import Search from "../search/Search";
import { helpHttp } from "../../helpers/helpHttp";
import DonwloadProduct from "./DonwloadProduct";
import FormEditProduct from "./FormEditProduct";
//import ExportExcel from "react-export-excel";

const Product = () => {
  const [dataProduct, setdataProduct] = useState([]);
  const [dataproductcopy, setDataProductCopy] = useState([]);
  const [busqueda, setbusqueda] = useState("");
  const [edit, setEdit] = useState({});
  var totalP = 0;

  let api = helpHttp();
  let urlProductos = "http://localhost:5000/productos";

  const getDataProduct = () => {
    helpHttp()
      .get(urlProductos)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setdataProduct(res);
          setDataProductCopy(res);
        } else {
          setdataProduct(null);
        }
      });
  };

  const filtro = (terminoBusqueda) => {
    const resultadoBusqueda = [];
    const limite = dataproductcopy.length;

    for (let index = 0; index < limite; index++) {
      const nombreProducto =
        dataproductcopy[index].medicamentoPresentacion?.toLowerCase();
      //console.log(nombreProducto);
      const patt = new RegExp(terminoBusqueda);
      const res = patt.test(nombreProducto);

      if (res) {
        resultadoBusqueda.push(dataproductcopy[index]);
      }
    }

    setdataProduct(resultadoBusqueda);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const cadena = e.target.value?.toLowerCase();
    setbusqueda(e.target.value);
    filtro(cadena);
    // console.log("busqueda: " + cadena);
  };

  const update = (producto) => {};

  useEffect(() => {
    getDataProduct();
  }, []);

  return (
    <>
      <Header />
      <div className="container  pt-5  ">
        <div className="col-md-10 position-fixed pt-3 bg-secondary bg-gradient p-2">
          <div className="row ">
            <div className="col">
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Buscar Producto..."
                  onChange={handleSearch}
                  value={busqueda}
                />
              </div>
            </div>
            <div className="col">
              <span className="text-white">Total : {dataProduct.length}</span>
            </div>
            <div className="col">
              <DonwloadProduct></DonwloadProduct>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid row pt-5"
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
          dataProduct.map((producto) => {
            return (
              <div
                className="col-md-3 text-center card-group pt-5 "
                key={producto.id}
                id="navbar-example"
              >
                <h5 className="text-start text-primary container fw-bold">
                  {producto.medicamentoPresentacion}
                </h5>
                <p className="text-start container">
                  <b className="text-success">Stock:</b>{" "}
                  <b className="text-danger">{producto.cantidad}</b>
                  <br />
                  <span>
                    {" "}
                    <b className="text-success">Ubicación:</b>{" "}
                    <b>{producto.ubicacion}</b>{" "}
                  </span>
                  <br />
                  <span>
                    {" "}
                    <b className="text-success">Vencimiento:</b>{" "}
                    <b className="text-danger">{producto.fVencimiento}</b>{" "}
                  </span>
                  <br />
                  <span>
                    <b className="text-success">Precio de venta:</b>{" "}
                    <b>{producto.pVenta} bs</b>
                  </span>
                  <br />
                  <span>
                    <b className="text-success">Modo de venta:</b>{" "}
                    <b className="text-danger">{producto.modoVenta}</b>{" "}
                  </span>
                  <br />
                  <span>
                    <b className="text-success">Laboratorio:</b>{" "}
                    <b>{producto.laboratorio}</b>{" "}
                  </span>
                </p>

                <button
                  type="button"
                  className="btn btn-success btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => setEdit(producto)}
                >
                  Editar
                </button>
                <div
                  className="modal fade"
                  id="editModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-danger" id="exampleModalLabel">
                          Editar Producto
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <FormEditProduct
                          dataEdit={edit}
                          setEdit={setEdit}
                          urlProductos={urlProductos}
                          api={api}
                          setdataProduct={setdataProduct}
                          dataProduct={dataProduct}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-danger btn-sm">
                  Eliminar
                </button>
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
