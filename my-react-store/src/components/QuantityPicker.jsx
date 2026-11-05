import "./QuantityPicker.css";

function QuantityPicker(props) {
  // DECREASE QUANTITY
  function handleDecrease() {
    const nextValue = props.quantity - 1;

    // Prevent quantity from going below 1
    if (nextValue > 0) {
      props.setQuantity(nextValue);
    }
  }

  // INCREASE QUANTITY
  function handleIncrease() {
    const nextValue = props.quantity + 1;

    props.setQuantity(nextValue);
  }

  return (
    <div className="quantity-picker">
      <button className="btn-minus" onClick={handleDecrease}>
        -
      </button>

      <label className="label-quantity">{props.quantity}</label>

      <button className="btn-plus" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
