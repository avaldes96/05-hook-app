import React from "react";
import { useCouter } from "../../hooks/useCouter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEfect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCouter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBag Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
          <figure className="text-end">
            <blockquote className="blockquote">
              <p className="mb-0">{quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">{author}</figcaption>
          </figure>

          <button className="btn btn-primary" onClick={increment}>
            Siquiente frase
          </button>
        </>
      )}
    </div>
  );
};
