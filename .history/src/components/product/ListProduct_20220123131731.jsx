import React, { useState, useEffect } from 'react'
import data from '../../data/data'
import Search from '../search/Search'





const ListProduct = () => {

    const [productos, setProductos] = useState([]);
    const [productsearch, setProductsearch] = useState([]);

    const getProductos = async () => {

        setProductos(data);
        setProductsearch(data);

    }

    const filtrar = (terminoBusqueda) => {

        const resultadoBusqueda = [];
        const limite = productsearch.length;

        for (let index = 0; index < limite; index++) {
            const nombreProducto = productsearch[index].medicamentoPresentacion?.toLowerCase();
            //console.log(nombreProducto);            
            const patt = new RegExp(terminoBusqueda);
            const res = patt.test(nombreProducto);

            if (res) {
                resultadoBusqueda.push(productsearch[index])
            }
        }


        setProductos(resultadoBusqueda);

    }

    useEffect(() => {
        getProductos();
    }, [])


    return (

        <div className='row pt-5'>
            <div className='row sticky-top pt-5' >
                <div className='col-12'>
                    <p></p>
                <Search filtro={filtrar} />
                </div>
           
            </div> 


            <div className="row pt-4">
                {productos && productos.map((producto) => {

                    return (
                        <div className="col-4 text-center" key={producto.item}>
                            <svg className="bd-placeholder-img rounded-circle" width="40" height="40" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#35753e" /><text x="10%" y="50%" fill="#fff" dy=".3em">{producto.pVenta}bs</text></svg>
                            <h6 className='text-primary '>{producto.medicamentoPresentacion}</h6>
                            <p ><b className='me-2'>Stock:</b> {producto.cantidad}<br />
                                <span className='text-war'> <b> Ubicación:</b> {producto.ubicacion}</span>
                            </p>                            

                        </div>

                    );
                })}

            </div>

        </div>
    )
}

export default ListProduct
