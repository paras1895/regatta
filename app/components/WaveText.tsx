import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text, className }) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            y: [0, -16, 0],
          }}
          transition={{
            duration: 2.0,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.12,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default WaveText;
