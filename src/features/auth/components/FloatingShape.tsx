import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
      />
    </>
  );
}