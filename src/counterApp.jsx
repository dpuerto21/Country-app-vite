import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      {/* <div> {value} </div> */}
      <p> El valor inicial del contador es {value}</p>
      <span> Suma de uno en uno </span>
      <div className="button">
        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSubtract}> -1 </button>
        <button onClick={handleReset}> Reset </button>
      </div>

      <div class="numb"> {counter}</div>
      <hr />
      <input
        onFocus={(e) => console.log(e, "onFocus")}
        onBlur={(e) => console.log(e, "onBlur")}
      />
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  // app: PropTypes.string.isRequired,
};
