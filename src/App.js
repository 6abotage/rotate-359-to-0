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

export default function App() {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    let timeoutId = setTimeout(() => setDegree(359), 2000);
    return () => clearInterval(timeoutId);
  }, [degree]);

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
