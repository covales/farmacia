import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListProductVencidos from './components/product/ListProductVencidos';
import ListProductGood from './components/product/ListProductGood';
import ListProductLowStock from './components/product/ListProductLowStock';
import ProductSale from './components/product/ProductSale';
import ListClient from './clientes/ListClient';
import Product from './components/product/Product';
import ListVentas from './ventas/ListVentas';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home />}/>     
          <Route exact path="vencidos" element={<ListProductVencidos/>}/>
          <Route exact path="good" element={<ListProductGood/>}/>
          <Route exact path="lowstock" element={<ListProductLowStock/>}/>
          <Route exact path="productsale" element={<ProductSale/>}/>
          <Route exact path="productos" element={<Product/>}/>
          <Route exact path="clientes" element={<ListClient/>}/>
          <Route exact path="ventas" element={<ListVentas/>}/>         
        </Routes>        
      
    </Router>

  );
}

export default App;
