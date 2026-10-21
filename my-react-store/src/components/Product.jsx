import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";


function Product(props){

    // Name        Function
    const [quantity, setQuantity] = useState(1);
    // useState = STATE variable lets a component remember
    // a value and update the screen when that value changes.


    // Calculates the total price based on the quantity selected.
    const total = props.data.price * quantity;


    return(

        <div className="product">

            <img
                src={"/images/" + props.data.image}
                alt={props.data.title}
            />


            <h5>
                {props.data.title}
            </h5>


            <div className="prices">

                <label>
                    Price:
                </label>

                <label>
                    ${props.data.price.toFixed(2)}
                </label>


                <label>
                    Total:
                </label>

                <label>
                    ${total.toFixed(2)}
                </label>

            </div>


            {/* Product passes quantity information down to QuantityPicker */}
            <QuantityPicker
                quantity={quantity}
                setQuantity={setQuantity}
            />

        </div>
    );
}


export default Product;