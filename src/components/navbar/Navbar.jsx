import React from 'react'
import { Link } from "react-router-dom"
import FormAddProduct from '../product/FormAddProduct'
import ModalCliente from '../../clientes/ModalCliente'

const Navbar = (props) => {
    return (

        <div className='container'>
            <nav className="navbar navbar-expand-md navbar-dark  fixed-top bg-dark ">
                <div className="container ">
                    <Link className="navbar-brand" to="/">Farmacia El Cristo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/clientes">Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/productsale'>Vender</Link>
                            </li>
                        </ul>
                        <div className="dropdown mx-auto">
                            <a href="#" className="d-flex text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>Pablo</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#productModal">Registrar Producto</a></li>
                                <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#vendedorModal">Registrar Vendedor</a></li>
                                <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clientModal">Registrar Cliente</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Salir</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/*MODAL PARA EL REGISTRO DE PRODUCTOS*/}
            <div className="modal fade" id="productModal" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productModalLabel">Registrar productos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormAddProduct></FormAddProduct>
                        </div>
                    </div>
                </div>
            </div>
            {/*MODAL PARA EL REGISTRO CLIENTES*/}
            <div className="modal fade" id="clientModal" aria-labelledby="clientModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="clientModalLabel">Registrar cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ModalCliente></ModalCliente>
                        </div>
                    </div>
                </div>
            </div>
            {/*MODAL PARA EL REGISTRO VENDEDOR*/}
            <div className="modal fade" id="vendedorModal" aria-labelledby="vendedorLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="vendedorLabel">Registrar vendedor</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <ModalCliente></ModalCliente>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Navbar
