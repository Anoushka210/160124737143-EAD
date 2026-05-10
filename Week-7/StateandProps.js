import React, { useState } from "react";

function Car(props) {
  return <h3>{props.brand}</h3>;
}

function Garage() {
  const [car, setCar] = useState("Toyota");

  return (
    <div>
      <Car brand={car} />
      <button onClick={() => setCar("BMW")}>Change</button>
    </div>
  );
}

export default Garage;