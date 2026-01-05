import { motion } from "framer-motion";

const SpeedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal speed lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          style={{
            top: `${15 + i * 10}%`,
            width: `${100 + Math.random() * 200}px`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ 
            x: ["0%", "100vw"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default SpeedLines;
