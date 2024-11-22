"use client"
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Portfolio
    </motion.div>
  );
}
