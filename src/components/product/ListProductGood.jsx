import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import data from '../../data/data'

const ListProductGood = () => {
    const [good, setGood] = useState([]);

    const initialGood = () => {
        const fActual = new Date();
        const limite = data.length;
        const BusquedaBuenos = [];

        for (let index = 0; index < limite; index++) {

            const productFV = new Date(data[index].fVencimiento?.toString());

            if (productFV > fActual) {

                BusquedaBuenos.push(data[index]);


            }

        }
        setGood(BusquedaBuenos);

    }

    useEffect(() => {
        initialGood();
    }, [])

    return (
        <div>
            <Header /><br />
            <div className='row pt-5'>
                {good && good.map(g => {
                    return (
                        <div className="col-3 text-center" key={g.item}>
                            <svg className="bd-placeholder-img rounded-circle" width="40" height="40" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#35753e" /><text x="10%" y="50%" fill="#fff" dy=".3em">{g.pVenta}bs</text></svg>
                            <h6>{g.medicamentoPresentacion}</h6>
                            <p>Cantidad: {g.cantidad}<br />
                                <span>Ubicación: {g.ubicacion}</span>
                            </p>
                            <p>Venc. {g.fVencimiento}</p>

                        </div>

                    );
                })

                }

            </div>

        </div>
    )
}

export default ListProductGood
