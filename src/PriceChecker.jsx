
function PriceChecker()
{
    return ( 
    <>
    <h1>Price Checker</h1>
    <label htmlFor="productname">Enter Product Name:</label>
    <input type="text" id="productname" name="productname" />
    <label htmlFor="quantity">Enter Quantity:</label>
    <input type="number" id="quantity" name="quantity" />
    <label htmlFor="unitprice">Enter Price:</label>
    <input type="number" id="unitprice" name="unitprice" />

    <button>Calculate Total Price</button>
    <button onClick={()=> {
        setproductname("");
        setquantity("");
        setunitprice("");
    }}>Reset</button>
    

        
    </>
    )
}

export default PriceChecker