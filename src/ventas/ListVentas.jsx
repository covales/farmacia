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
      <div className="container  pt-5">
        <br />
        <div className="row">
          {ventas.map((venta) => {
            let producto = venta["productos"];
            let ventaFecha= new Date(venta.fecha);
            const año = ventaFecha.getFullYear();
            const dia = ventaFecha.getDate();
            const mes = ventaFecha.getMonth() + 1;
            //console.log(añoActual);

            return (
              <div
                className="col-3 card  border-success me-2 "
                key={venta.id}
              >
                <div className="card-header bg-transparent border-success">Fecha de venta: {dia +"/"+ mes +"/"+ año }</div>
                <div className="card-body">
                  <h5 className="card-title">Productos Vendidos:</h5>
                  
                    {producto.map((p) => {
                      return (
                        <ul className="list-group list-group-flush" key={p.id}>
                          <li className="list-group-item">{p.nombre}</li>
                        </ul>
                      );
                    })}
                  
                </div>
                <div className="card-footer  text-center bg-transparent border-success">
                 <h3>total : {venta.totalVenta} bs</h3> 
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
