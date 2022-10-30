import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormwithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Form with custom Hook:</h1>
      <hr />

      <div className="form-group input">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="of"
          value={name}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="********"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {" "}
        Guardar
      </button>
    </form>
  );
};
