import "./styles.css";
import { motion } from "framer-motion";

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
  var degree = 0;
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
