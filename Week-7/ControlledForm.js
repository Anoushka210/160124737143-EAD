import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form onSubmit={submit}>
      <input onChange={(e) => setName(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default Form;