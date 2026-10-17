import "./QuantityPicker.css";
import { useState } from "react";


function QuantityPicker(){
//          Name       Function
    const [quantity, setQuantity] = useState(1); // useState = STATE variable lets a component remember a value and update the screen when that value changes.

    function handleDecrease(){

        const nextValue = quantity - 1;

        if(nextValue > 0){

            setQuantity(nextValue);
        }
    }

    function handleIncrease(){

        const nextValue = quantity + 1;

        setQuantity(nextValue);
    }

    return(

        <div className="quantity-picker">
            <button className="btn-minus"
                onClick={handleDecrease}>
                -
            </button>


            <label className="label-quantity">
                {quantity}
            </label>

            <button className="btn-plus"
                onClick={handleIncrease}>
                +
            </button>

        </div>
    );
}


export default QuantityPicker;