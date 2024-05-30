"use client";
import React from "react";
import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";

export function Lamp() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <LampContainer>
        <p></p>
      </LampContainer>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        className="-mt-20 text-2xl absolute text-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent">
        hey there, prem welcomes you :)
      </motion.p>
    </div>
  );
}
