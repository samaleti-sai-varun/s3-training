import React,{useState,useRef} from "react"

const ProductInvoice=()=>{
    const productid=useRef();
    const productname=useRef();
    const price=useRef();
    const quantity=useRef();
    
    const [proid,setProid] = useState(0);
    const [proname,setProname] = useState("");
    const [proprice,setProprice] = useState(0);
    const [proquantity,setProquantity] = useState(0);
    const [total,setTotal] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [gst,setGst] = useState(0);
    const [finalbill,setFinalbill] = useState(0);
    const [showInvoice,setInvoice] = useState(false);



    const product=()=>{
        setProid(productid.current.value);
        setProname(productname.current.value);
        setProprice(price.current.value);
        setProquantity(quantity.current.value);

        let TotalAmount = Number(price.current.value) * Number(quantity.current.value);
        setTotal(TotalAmount);
        let discount=0;
        if(TotalAmount < 20000)
        {
            discount=0.15*TotalAmount;
        }
        else if (TotalAmount >= 20000 && TotalAmount < 50000)
        {
            discount=0.21*TotalAmount;
        }
        else if(TotalAmount >= 50000)
        {
            discount=0.31*TotalAmount;
        }
        setDiscount(discount);

        let gst=0.18*TotalAmount;
        setGst(gst);

        let final=TotalAmount-discount+gst
        setFinalbill(final);
        setInvoice(true);
    };

    return(<>
    <div>
        <h1>Product Invoice</h1>
        Product ID: <input type="number" ref={productid} placeholder="Enter Product ID" required/><br />
        Product Name: <input type="text" ref={productname} placeholder="Enter Product Name" required/><br />
        Product Price: <input type="number" ref={price} placeholder="Enter Product Price" required/><br />
        Quantity: <input type="number" ref={quantity} placeholder="Enter Quantity" required/><br />
        <button onClick={product}>Generate Invoice</button>
    </div>
    <hr />
    {
        showInvoice && (
            <>
            <h4>Product Details</h4>
            <p>Product ID:{proid}</p>
            <p>Product Name:{proname}</p>
            <p>Product Price:{proprice}</p>
            <p>Quantity:{proquantity}</p>
            <p>Total:₹{total.toFixed(2)}</p>
            <p>Discount:₹{discount.toFixed(2)}</p>
            <p>GST:₹{gst.toFixed(2)}</p>
            <p>Final Bill:₹{finalbill.toFixed(2)}</p>
            </>
        )
    }
    </>
    );
}
export default ProductInvoice;