import React, { useState } from 'react'


const Search = (props) => {

    const [busqueda, setbusqueda] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        const cadena = e.target.value?.toLowerCase();
        setbusqueda(e.target.value);
        props.filtro(cadena);
        // console.log("busqueda: " + cadena);

    }

    return (

        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar Productos" aria-label="Search" value={busqueda} onChange={handleChange} />
            <svg  width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </form>

    )
}

export default Search
