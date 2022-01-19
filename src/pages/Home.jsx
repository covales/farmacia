import React from 'react'
import AsideReport from '../components/aside/AsideReport'
import Header from '../components/header/Header'
import ListProduct from '../components/product/ListProduct'

const Home = () => {
    return (
        <div className='container'>
            <Header />
            <div className='row pt-5'>
                <div className='col-md-4'>
                    <AsideReport />
                </div>
                <div className=' col-md-8'>
                   
                    <ListProduct/>

                </div>
                
            </div>




        </div>
    )
}

export default Home
