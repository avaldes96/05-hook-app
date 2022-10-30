import React, { useLayoutEffect, useRef, useState } from "react";
import { useCouter } from "../../hooks/useCouter";
import { useFetch } from "../../hooks/useFetch";
import "./Layout.css";

export const Layout = () => {
  const { counter, increment } = useCouter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const refP = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(refP.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout effect</h1>
      <hr />

      <>
        <figure className="text-end">
          <blockquote className="blockquote">
            <p className="mb-0">{quote}</p>
          </blockquote>
        </figure>
        \<pre>{JSON.stringify(boxSize, null, 3)}</pre>
        <button className="btn btn-primary" ref={refP} onClick={increment}>
          Siquiente frase
        </button>
      </>
    </div>
  );
};
