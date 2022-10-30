import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.clientX, y: e.clientY };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove); // mousemove

    return () => {
      window.removeEventListener(mouseMove, mouseMove);
    };
  }, []);

  return (
    <div>
      <h3> Eres genial!!!</h3>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};
