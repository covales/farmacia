import React, { useState, useEffect } from 'react';
import data from '../../data/data'
import Header from '../header/Header';
import Search from '../search/Search'



const Product = () => {
    const [dataProduct, setdataProduct] = useState([]);

    const getDataProduct = () => {
        setdataProduct(data);
    }

    useEffect(() => {
        getDataProduct();
    }, []);


    return (
        <>
            <Header />
            <div className="container  pt-5">
                <div className="col-10 position-fixed pt-3">

                    <div className="row">
                        <div className="col">
                            <Search />
                        </div>
                        <div className="col">
                            <span>Total de productos registrados: {dataProduct.length}</span>
                        </div>
                    </div>
                </div>


            </div>

            <div className="row pt-5" data-bs-spy="scroll" data-bs-target="#navbar-example">

                {dataProduct.length === 0 ? <div className="d-flex justify-content-center pt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
              
            </div>
            <h3>Cargando Productos</h3>
          </div>: dataProduct.map((dp) => {
                    return (

                        <div className="col-md-3 text-center pt-5" key={dp.id} id="navbar-example">
                            <svg className="bd-placeholder-img rounded-circle" width="40" height="40" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#35753e" /><text x="10%" y="50%" fill="#fff" dy=".3em">{dp.pVenta}bs</text></svg>
                            <h6>{dp.medicamentoPresentacion}</h6>
                            <p>Stock: {dp.cantidad}<br />
                                <span>Ubicación: {dp.ubicacion}</span><br />
                                <span>Vencimiento: {dp.fVencimiento}</span>
                            </p>

                            <button type="button" className="btn btn-success btn-sm me-2">editar</button>
                            <button type="button" className="btn btn-danger btn-sm">ocultar</button>
                            <hr />
                        </div>

                    );
                })
                }
            </div>

        </>
    );
};

export default Product;
