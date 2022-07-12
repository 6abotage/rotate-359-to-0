import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const innerCircleAnimation = (degree) => ({
  initial: {
    rotate: degree,
    translateX: "250px"
  },
  animate: {
    rotate: degree,
    translateX: "250px"
  },
  transition: {
    duration: 1
  }
});

function transformTemplate({ rotate, translateX }) {
  return `rotate(${rotate}) translateX(${translateX})`;
}

function rotateThis(degree, setDegree, nR) {
  var aR;
  var rot;
  rot = degree || 0; // if rot undefined or 0, make 0, else rot
  aR = rot % 360;
  if (aR < 0) {
    aR += 360;
  }
  if (aR < 180 && nR > aR + 180) {
    rot -= 360;
  }
  if (aR >= 180 && nR <= aR - 180) {
    rot += 360;
  }
  rot += nR - aR;
  console.log("rot in rotateThis: ", rot);
  setDegree(rot);
}

export default function App() {
  const [input, setInput] = useState(0);
  const [degree, setDegree] = useState(0);
  console.log("degree:", degree);

  /* useEffect(() => {
    let timeoutId = setTimeout(() => {
      rotateThis(degree, setDegree, 270);
    }, 2000);

    let timeoutId2 = setTimeout(() => {
      rotateThis(degree, setDegree, 180);
    }, 4000);

    return () => {
      clearInterval(timeoutId);
      clearInterval(timeoutId2);
    };
  }, []); */

  return (
    <div className="App">
      <button onClick={() => rotateThis(degree, setDegree, input)}>
        {" "}
        set Degree{" "}
      </button>
      <input
        type="number"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="circle">
        <motion.div
          className="innerCircle"
          transformTemplate={transformTemplate}
          {...innerCircleAnimation(degree)}
        />
      </div>
    </div>
  );
}
