import React,{useState} from 'react';

const initialStateClient = {
    nombre: '',
    apellido: '',
    ci: '',
    telefono1: '',
    telefono2: '',
    fechan: '', //FECHA DE NACIMIENTO
    edad: '',
}

const ModalCliente = () => {
    const [vendedor, setVendedor] = useState(initialStateClient);

    const handleInputChange = e => {
        const { id, value } = e.target;
        const error = "El campo no puede estar vacio";
        setVendedor({ ...vendedor, [id]: value });
        
        //console.log(addProducto);
    }
  return (
    <div>
    <div className="mb-2 row">
        <p>Los campos marcados con * son obligatorios </p>
        <label htmlFor="nombre" className="col-sm-5 col-form-label col-form-label-sm">* Nombre</label>
        <div className="col-sm-5">
            <input
                type="text"
                className="form-control form-control-sm"
                id="nombre"
                onChange={handleInputChange}
                value={vendedor.nombre}
            />
        </div>
    </div>
    <div className="mb-2 row">
        <label htmlFor="apellido" className="col-sm-5 col-form-label col-form-label-sm">* Apellido</label>
        <div className="col-sm-5">
            <input
                type="text"
                className="form-control form-control-sm"
                id="apellido"
                onChange={handleInputChange}
                value={vendedor.apellido}
            />
        </div>
    </div>
    <div className="mb-2 row">
        <label htmlFor="ci" className="col-sm-5 col-form-label col-form-label-sm">* C.I</label>
        <div className="col-sm-5">
            <input 
            type="text" 
            className="form-control form-control-sm" 
            id="ci" 
            onChange={handleInputChange}
            value={vendedor.ci}
            />
        </div>
    </div>
    <div className="mb-2 row">
        <label htmlFor="telefono1" className="col-sm-5 col-form-label col-form-label-sm">* Telefono 1</label>
        <div className="col-sm-5">
            <input 
            type="number" 
            className="form-control form-control-sm" 
            id="telefono1" 
            onChange={handleInputChange}
            value={vendedor.telefono1}
            />
        </div>
    </div>
    <div className="mb-2 row">
        <label htmlFor="telefono2" className="col-sm-5 col-form-label col-form-label-sm">* Telefono2</label>
        <div className="col-sm-5">
            <input 
            type="number" 
            className="form-control form-control-sm" 
            id="telefono2" 
            onChange={handleInputChange}
            value={vendedor.telefono2}
            />
        </div>
    </div>
    <div className="mb-2 row">
        <label htmlFor="fechan" className="col-sm-5 col-form-label col-form-label-sm">* Fecha de nacimiento</label>
        <div className="col-sm-5">
            <input 
            type="date" 
            className="form-control form-control-sm" 
            id="fechan" 
            onChange={handleInputChange}
            value={vendedor.fechan}
            />
        </div>
    </div>
    <div className="mb-2 row">
        <label htmlFor="edad" className="col-sm-5 col-form-label col-form-label-sm">* Edad</label>
        <div className="col-sm-5">
            <input 
            type="number" 
            className="form-control form-control-sm" 
            id="edad" 
            onChange={handleInputChange}
            value={vendedor.edad}
            />
        </div>
    </div>
    
    <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-success" disabled>Guardar</button>
    </div>
</div>
  );
};

export default ModalCliente;
