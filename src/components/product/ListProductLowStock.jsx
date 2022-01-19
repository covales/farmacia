import React, { useState, useEffect } from 'react'
import data from '../../data/data'
import Header from '../header/Header';

const ListProductLowStock = () => {
    const [lowstock, setLowstock] = useState([]);

    const lowStock = () => {


        const limite = data.length;
        const lowstock = [];


        for (let index = 0; index < limite; index++) {

            const productCantidad = data[index].cantidad?.toString();
            const productItem = data[index].item?.toString();
            if (productCantidad <= 10) {
                lowstock.push(data[index])
                // console.log(lowstock, productItem,productCantidad);
                // console.log("total" + " "+ lowstock.length )

            }

            setLowstock(lowstock);

        }




    }
    useEffect(() => {
        lowStock();
    }, [])

    return (
        <div>
            <Header></Header> <br/>
            <div className='row pt-5'>
                {lowstock && lowstock.map(ls => {
                    return (
                        <div className="col-3 text-center" key={ls.item}>
                            <svg className="bd-placeholder-img rounded-circle" width="40" height="40" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#35753e" /><text x="10%" y="50%" fill="#fff" dy=".3em">{ls.pVenta}bs</text></svg>
                            <h6>{ls.medicamentoPresentacion}</h6>
                            <p>Cantidad: {ls.cantidad}<br />
                                <span>Ubicación: {ls.ubicacion}</span>
                            </p>
                            <p>Venc. {ls.fVencimiento}</p>

                        </div>

                    );
                })

                }

            </div>


        </div>
    )
}

export default ListProductLowStock
