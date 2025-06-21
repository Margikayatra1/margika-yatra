"use client"

import { motion } from "framer-motion"

export function LightningEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Main Lightning Bolts */}
      <motion.div
        className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-orange-400/0 via-orange-400/60 to-orange-400/0"
        animate={{
          opacity: [0, 1, 0.8, 1, 0],
          scaleY: [0, 1, 0.9, 1, 0],
        }}
        transition={{
          duration: 0.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-orange-300/0 via-orange-300/40 to-orange-300/0"
        animate={{
          opacity: [0, 1, 0.6, 1, 0],
          scaleY: [0, 1, 0.8, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 6,
          delay: 2,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0"
        animate={{
          opacity: [0, 1, 0.4, 1, 0],
          scaleY: [0, 1, 0.7, 1, 0],
        }}
        transition={{
          duration: 0.25,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 8,
          delay: 4,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal Lightning */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0"
        animate={{
          opacity: [0, 1, 0.5, 1, 0],
          scaleX: [0, 1, 0.8, 1, 0],
        }}
        transition={{
          duration: 0.35,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 7,
          delay: 1,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-orange-300/0 via-orange-300/30 to-orange-300/0"
        animate={{
          opacity: [0, 1, 0.3, 1, 0],
          scaleX: [0, 1, 0.6, 1, 0],
        }}
        transition={{
          duration: 0.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 9,
          delay: 3,
          ease: "easeInOut",
        }}
      />

      {/* Corner Lightning Effects */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32"
        animate={{
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 5,
          delay: 2.5,
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-orange-400/20 to-transparent rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24"
        animate={{
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 6,
          delay: 1.5,
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-orange-300/15 to-transparent rounded-full" />
      </motion.div>
    </div>
  )
}
