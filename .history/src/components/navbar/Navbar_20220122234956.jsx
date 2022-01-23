import React from 'react'
import Search from '../search/Search'
import { Link } from "react-router-dom";
import FormAddProduct from '../product/FormAddProduct';

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
                                <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Registrar Producto</a></li>
                                <li><a className="dropdown-item" href="#">Registrar Vendedor</a></li>
                                <li><a className="dropdown-item" href="#">Registrar Cliente</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Salir</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Registrar productos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <FormAddProduct></FormAddProduct>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={props.hande}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
