import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListProductVencidos from './components/product/ListProductVencidos';
import ListProductGood from './components/product/ListProductGood';
import ListProductLowStock from './components/product/ListProductLowStock';
import ProductSale from './components/product/ProductSale';
import ListProduct from './components/product/ListProduct';
import ListClient from './clientes/ListClient';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Home />}/>     
          <Route exact path="vencidos" element={<ListProductVencidos/>}/>
          <Route exact path="good" element={<ListProductGood/>}/>
          <Route exact path="lowstock" element={<ListProductLowStock/>}/>
          <Route exact path="productsale" element={<ProductSale/>}/>
          <Route exact path="productos" element={<ListProduct/>}/>
          <Route exact path="clientes" element={<ListClient/>}/>

         
        </Routes>        
      </div>
    </Router>

  );
}

export default App;
