import React from "react";

const Form = props => {
  return (
    <form>
      <input type="text" value={props.value} onChange={props.change} />
      <button onClick={props.click}>Znajdź</button>
    </form>
  );
};
export default Form;
