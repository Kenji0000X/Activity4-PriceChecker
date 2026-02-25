import { Link } from 'react-router-dom';
function Homepage()
{
    return ( 
        <>
        <diV><h1>Home Page</h1></diV>
    <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/bill"><h2>Bills Details</h2></Link> |{" "}
        <Link to="/products/product"><h2>Product Details</h2> </Link>
      </nav> 
      </>
    )
   
}



export default Homepage