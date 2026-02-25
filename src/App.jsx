
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import PriceChecker from './PriceChecker';
import { Outlet } from 'react-router-dom';

function ProductDetails() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/bill">bills</Link> |{" "}
        <Link to="/products/product">product </Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}

function BillingDetails() {
  return (
    <div>
      <h2>bills</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}




function App() {
  

  return (
    <BrowserRouter>
    <>
      <div>
        <nav>
         
        <Link to="/Homepage">Home Page</Link> |{" "}
        <Link to="/PriceChecker">Price Checker</Link>
      </nav>

        <Routes>
         <Route path="/Homepage" element={<Homepage />} />
         <Route path="bill" element={<BillingDetails />} />
          <Route path="product" element={<ProductDetails />} />
        <Route path="/PriceChecker" element={<PriceChecker />} />
      </Routes>

      </div>

      
    
    </>
     </BrowserRouter>
  )
}

export default App
