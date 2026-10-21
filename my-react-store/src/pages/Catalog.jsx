import Product from "../components/Product";
import "./Catalog.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";


function Catalog(){

    // products = keeps the full/original catalog.
    // Think of this as our master copy or backup.
    const [products, setProducts] = useState([]);


    // productsToDisplay = keeps track of the products
    // that are currently being shown on the screen.
    const [productsToDisplay, setProductsToDisplay] = useState([]);


    // categories = stores the category names
    // that will be used to create our filter buttons.
    const [categories, setCategories] = useState([]);


    useEffect(() => {

        // Creates a new DataService object.
        let service = new DataService();


        // getProducts() returns the catalog from our mock data.
        let data = service.getProducts();


        // Stores the complete catalog in products.
        setProducts(data);


        // When the page first loads,
        // we want to display all of the products.
        setProductsToDisplay(data);


        // These categories match the categories
        // inside our product objects.
        let cats = [
            "Beverages",
            "Food"
        ];


        // Stores the categories in React state.
        setCategories(cats);

    }, []); 
    // The empty array means this effect runs
    // when the component first loads.


    // filter() receives the category
    // that the user clicked.
    function filter(category){

        // This empty array will temporarily hold
        // all of the products that match the category.
        let list = [];


        // Loop through the complete/master products array.
        for(let i = 0; i < products.length; i++){

            // prod represents the current product
            // that the loop is looking at.
            let prod = products[i];


            // Check if the current product category
            // matches the category the user selected.
            if(prod.category === category){

                // If it matches, add the product to our list.
                list.push(prod);
            }
        }


        // Update the products that React displays.
        setProductsToDisplay(list);
    }


    // clearFilters() restores the full catalog.
    function clearFilters(){

        // products contains our complete/master catalog.
        setProductsToDisplay(products);
    }


    return(

        <div className="catalog">

            <h1>
                Our Catalog
            </h1>


            <div className="filters">

                {/* Shows all products again */}
                <button onClick={clearFilters}>
                    All
                </button>


                {/* Creates one button for every category */}
                {categories.map((tempCategory) => (

                    <button
                        key={tempCategory}
                        onClick={() => filter(tempCategory)}
                    >
                        {tempCategory}
                    </button>

                ))}

            </div>


            <div className="product-list">

                {/* 
                    productsToDisplay = what the user currently sees.

                    Before:
                    products.map()

                    Now:
                    productsToDisplay.map()
                */}
                {productsToDisplay.map((prod) => (

                    <Product
                        key={prod.id}
                        data={prod}
                    />

                ))}

            </div>

        </div>
    );
}


export default Catalog;