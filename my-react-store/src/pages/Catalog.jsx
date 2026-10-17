import Product from "../components/Product";
import "./Catalog.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";


function Catalog(){
    const [products, setProducts] = useState([]);

    useEffect( () => {
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    }, []); //The empty array means this effect runs when the component first loads.
    return(

        <div className="catalog">

            <h1>
                Our Catalog
            </h1>
            <div className="product-list">
            {products.map((prod) => (
                <Product key={prod.id} data={prod} />
            ))}
            </div>
        </div>
    );
}

export default Catalog;