import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { helpHttp } from "../helpers/helpHttp";

const ListVentas = () => {
  const [ventas, setVentas] = useState([]);
  let urlVentas = "http://localhost:5000/ventas";

  const getVentas = () => {
    helpHttp()
      .get(urlVentas)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setVentas(res);
        } else {
          setVentas(res);
        }
      });
  };
  useEffect(() => {
    getVentas();
  }, []);
  const cardStyle = {
    maxWidth: 18,
  };

  return (
    <>
      <Header></Header>
      <div className="container-fluid  pt-5">
        <br />
        <div className="row justify-content-center">
          {ventas.map((venta) => {
            let producto = venta["productos"];
            let ventaFecha = new Date(venta.fecha);
            const año = ventaFecha.getFullYear();
            const dia = ventaFecha.getDate();
            const mes = ventaFecha.getMonth() + 1;
            //console.log(añoActual);

            return (
              <div
                className="col-md-4 col-lg-2 card  border-success me-2 mb-1"
                key={venta.id}
              >
                <div className="card-header bg-transparent border-success text-danger">
                  Fecha de venta: {dia + "/" + mes + "/" + año}
                </div>
                <div className="card-body">
                  <h6 className="card-title text-primary">Productos Vendidos:</h6>

                  {producto.map((p) => {
                    return (
                      <ul className="list-group list-group-flush" key={p.id}>
                        <li className="list-group-item">{p.nombre}</li>
                      </ul>
                    );
                  })}
                </div>
                <div className="card-footer  text-center bg-transparent border-success">
                  <h6 className="text-primary">total : {venta.totalVenta} bs</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListVentas;
