import React, { useState, useEffect } from 'react'
import Header from '../header/Header';
import data from '../../data/data'




const ListProductVencidos = () => {
    
    const [vencidos, setVencidos] = useState([]);

    const initialExpiration = () => {
        const fActual = new Date();
        const limite = data.length;
        const BusquedaVencidos = [];

        for (let index = 0; index < limite; index++) {

            const productFV = new Date(data[index].fVencimiento?.toString());

            if (productFV <= fActual) {

                BusquedaVencidos.push(data[index]);
               // console.log("producto" + BusquedaVencidos);
            }

        }
        setVencidos(BusquedaVencidos);


    }

    useEffect(() => {
        initialExpiration();
    }, [])

    return (
        <div>
            <Header /><br/>
            <div className='row pt-5'>
                {vencidos.length === 0 ? <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
              
            </div>
            <h3>Cargando Productos Vencidos</h3>
          </div>: vencidos.map(v => {
                    return (
                        <div className="col-3 text-center" key={v.id}>
                            <svg className="bd-placeholder-img rounded-circle" width="40" height="40" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#35753e" /><text x="10%" y="50%" fill="#fff" dy=".3em">{v.pVenta}bs</text></svg>
                            <h6 className='text-primary'>{v.medicamentoPresentacion}</h6>
                            <p>Cantidad: {v.cantidad}<br />
                                <span>Ubicación: {v.ubicacion}</span>
                            </p>
                            <p className='text-danger'>Venc. {v.fVencimiento}</p>

                        </div>

                    );
                })

                }

            </div>

        </div>
    )
}

export default ListProductVencidos;
