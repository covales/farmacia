import React, { useState, useEffect } from 'react'
import data from '../../data/data'
import { Link } from "react-router-dom";

const initialExpiration = () => {
    const fActual = new Date();
    const limite = data.length;
    var number = 0;
    const BusquedaVencidos = [];

    for (let index = 0; index < limite; index++) {

        const productFV = new Date(data[index].fVencimiento?.toString());

        if (productFV <= fActual) {

            BusquedaVencidos.push(data[index]);
            number = BusquedaVencidos.length;

        }

    }

    return number
}

const initialGood = () => {
    const fActual = new Date();
    const limite = data.length;
    var number = 0;
    const BusquedaBuenos = [];

    for (let index = 0; index < limite; index++) {

        const productFV = new Date(data[index].fVencimiento?.toString());

        if (productFV > fActual) {

            BusquedaBuenos.push(data[index]);
            number = BusquedaBuenos.length;

        }

    }

    return number

}

const lowStock = () => {

    var number = 0;
    const limite = data.length;
    const lowstock = [];
    

    for (let index = 0; index < limite; index++) {

        const productCantidad = data[index].cantidad?.toString();
        const productItem = data[index].item?.toString();
        if (productCantidad<=10){
            lowstock.push(data[index])
           // console.log(lowstock, productItem,productCantidad);
           // console.log("total" + " "+ lowstock.length )
           number=lowstock.length;
        }

       
        

    }

    return number


}


const AsideReport = () => {

    const [count, setCount] = useState(initialExpiration);
    const [countxv, setCountXV] = useState(initialGood);
    const [countstock, setCountStock] = useState(lowStock);




    return (
        <div className='sticky-top pt-5'>
            <p></p>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    <span className="fs-4">Informes</span>
                </p>
                <hr />
                <ul className="nav nav-pills flex-column ">
                    <li className="nav-item ">
                        <Link to="/vencidos" className="nav-link text-white " aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-down-arrow mx-2" viewBox="0 0 16 16">
                                <path d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z" />
                            </svg>
                            Vencidos<span className="badge bg-danger mx-2" >{count}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/good" className="nav-link text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up-arrow mx-2" viewBox="0 0 16 16">
                                <path d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                            </svg>
                            Buen estado<span className="badge bg-success mx-2">{countxv}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lowstock" className="nav-link text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-dash mx-2" viewBox="0 0 16 16">
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            Poco Stock<span className="badge bg-warning text-dark mx-2">{countstock}</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default AsideReport
