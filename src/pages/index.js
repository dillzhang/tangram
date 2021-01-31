import React, { useState } from "react";
import "./index.css";

const shapes = [
  "square",
  "small-triangle",
  "small-triangle",
  "medium-triangle",
  "big-triangle",
  "big-triangle",
  "parallelogram",
];

const shapeValues = shapes.map((shape) => ({ shape, rotation: 0 }));

// markup
const IndexPage = () => {
  const [size, setSize] = useState(25);
  const [shapeV, setShapeV] = useState(shapeValues);
  let counter = 0;
  counter += 1;
  const style = {
    "--base-piece-size": `${size}px`,
  };
  return (
    <main>
      <title>Dilliana's Tangrams</title>
      <div
        onClick={() => {
          setSize(size + 1);
        }}
      >
        The current size is {size}. Current counter is {counter}
      </div>
      <div className="tangram-container" style={style}>
        {shapeV.map((shape, index) => {
          const style = {
            transform: `rotate(${shape.rotation}deg)`,
          };
          return (
            <div
              key={`shape-${index}`}
              style={style}
              onClick={() => {
                const newValues = shapeV.map((s, i) => {
                  return {
                    ...s,
                    rotation: s.rotation + (index !== i ? 0 : 45),
                  };
                });
                setShapeV(newValues);
              }}
              className={`tangram-piece ${shape.shape}`}
            ></div>
          );
        })}
      </div>
    </main>
  );
};

export default IndexPage;
