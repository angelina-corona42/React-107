import "./QuantityPicker.css";


function QuantityPicker(props){

    // quantity comes FROM the Product component through props.
    // Product is responsible for remembering the quantity.


    function handleDecrease(){

        // Subtract 1 from the current quantity.
        const nextValue = props.quantity - 1;

        // Prevent quantity from going below 1.
        if(nextValue > 0){

            // Tell Product to update the quantity.
            props.setQuantity(nextValue);
        }
    }


    function handleIncrease(){

        // Add 1 to the current quantity.
        const nextValue = props.quantity + 1;

        // Tell Product to update the quantity.
        props.setQuantity(nextValue);
    }


    return(

        <div className="quantity-picker">

            <button
                className="btn-minus"
                onClick={handleDecrease}
            >
                -
            </button>


            <label className="label-quantity">
                {props.quantity}
            </label>


            <button
                className="btn-plus"
                onClick={handleIncrease}
            >
                +
            </button>

        </div>
    );
}


export default QuantityPicker;