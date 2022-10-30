import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hola!");
  }, []);

  const handleImputeChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1> use Effect:</h1>
      <hr />

      <div className="form-group input">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="of"
          value={name}
          onChange={handleImputeChange}
        />
      </div>

      <div className="form-group input">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="ejemplo: email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleImputeChange}
        />
      </div>

      {name === "Adriana" && <Message />}
    </div>
  );
};
