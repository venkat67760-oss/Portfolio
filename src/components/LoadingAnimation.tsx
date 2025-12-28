import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-8xl font-bold mb-4 glow-text-cyan"
        >
          S Venkat
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 gradient-primary mx-auto rounded-full shadow-neon-cyan"
        />
      </div>
    </motion.div>
  );
};
