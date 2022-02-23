import React,{useState} from 'react'
import styled from 'styled-components'
import AsideReport from '../components/aside/AsideReport'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import ListProduct from '../components/product/ListProduct'



const Home = () => {
   
    return (
        <>
           
            <Header></Header>
            <main className='container pt-5'>
                <div className="row">
                    <div className="col-md-4"><AsideReport /></div>
                    <div className="col"><ListProduct /></div>
                </div>
            </main>         

        </>

    )
}

export default Home


