import React, { useMemo, useState } from "react";
import "../02-useEfect/effects.css";
import { useCouter } from "../../hooks/useCouter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { counter, increment } = useCouter(500);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook </h1>
      <hr />

      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide
        {JSON.stringify(show)}
      </button>
    </div>
  );
};
