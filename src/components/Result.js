import React from "react";

const Result = props => {
  let content = null;

  if (!props.results.error && props.results.city) {
    content = (
      <>
        <h3>Temperatura: {props.results.temp} &#176;C</h3>
      </>
    )
  }

  return (
    <div>
      {props.results.error ? `Nie mamy miasta ${props.results.city}` : content}
    </div>
  );
};
export default Result;
