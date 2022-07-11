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

function rotateThis(element, nR) {
  var aR;
  rot = rot || 0; // if rot undefined or 0, make 0, else rot
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
  element.style.transform = "rotate( " + rot + "deg )";
}

export default function App() {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      console.log("setDegree(350)");
      setDegree(270);
    }, 2000);

    let timeoutId2 = setTimeout(() => {
      console.log("setDegree(0)");
      setDegree(0);
    }, 4000);
    return () => {
      clearInterval(timeoutId);
      clearInterval(timeoutId2);
    };
  }, []);

  return (
    <div className="App">
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
