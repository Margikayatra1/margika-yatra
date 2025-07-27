"use client"

import { motion } from "framer-motion"

export function EnhancedLightningEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Main Lightning Bolts - Adapted for white/orange theme */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-orange-400/0 via-orange-500/60 to-orange-400/0"
        animate={{
          opacity: [0, 1, 0.8, 1, 0],
          scaleY: [0, 1, 0.9, 1, 0],
          boxShadow: [
            "0 0 0px rgba(249, 115, 22, 0)",
            "0 0 15px rgba(249, 115, 22, 0.6)",
            "0 0 10px rgba(249, 115, 22, 0.4)",
            "0 0 20px rgba(249, 115, 22, 0.8)",
            "0 0 0px rgba(249, 115, 22, 0)",
          ],
        }}
        transition={{
          duration: 0.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-orange-300/0 via-orange-400/40 to-orange-300/0"
        animate={{
          opacity: [0, 1, 0.6, 1, 0],
          scaleY: [0, 1, 0.8, 1, 0],
          boxShadow: [
            "0 0 0px rgba(251, 146, 60, 0)",
            "0 0 12px rgba(251, 146, 60, 0.5)",
            "0 0 8px rgba(251, 146, 60, 0.3)",
            "0 0 16px rgba(251, 146, 60, 0.7)",
            "0 0 0px rgba(251, 146, 60, 0)",
          ],
        }}
        transition={{
          duration: 0.3,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 6,
          delay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal Lightning */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-orange-400/0 via-orange-500/40 to-orange-400/0"
        animate={{
          opacity: [0, 1, 0.5, 1, 0],
          scaleX: [0, 1, 0.8, 1, 0],
          boxShadow: [
            "0 0 0px rgba(249, 115, 22, 0)",
            "0 0 12px rgba(249, 115, 22, 0.5)",
            "0 0 8px rgba(249, 115, 22, 0.3)",
            "0 0 16px rgba(249, 115, 22, 0.7)",
            "0 0 0px rgba(249, 115, 22, 0)",
          ],
        }}
        transition={{
          duration: 0.35,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 7,
          delay: 1,
          ease: "easeInOut",
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/6 right-1/6 w-32 h-32"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/6 left-1/6 w-24 h-24"
        animate={{
          opacity: [0.05, 0.3, 0.05],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-orange-300/15 to-transparent rounded-full blur-xl" />
      </motion.div>

      {/* Floating Energy Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400/40 rounded-full"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          animate={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
