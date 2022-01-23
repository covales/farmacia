import React from 'react'
import styled from 'styled-components'
import AsideReport from '../components/aside/AsideReport'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import ListProduct from '../components/product/ListProduct'

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className='container pt-5'>
                <div className="row">
                    <div className="col-md-4"><AsideReport /></div>
                    <div className="col"><ListProduct /></div>
                </div>
            </main>
            <footer class="footer mt-auto py-3 bg-light">
                <div class="container">
                    <span class="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>

        </>

    )
}

export default Home


