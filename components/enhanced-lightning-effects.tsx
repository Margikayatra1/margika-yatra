"use client"

import { useEffect, useRef } from "react"

const styles = `
  @keyframes lightning-v {
    0%   { opacity: 0; transform: scaleY(0); }
    10%  { opacity: 1; transform: scaleY(1); }
    50%  { opacity: 0.7; transform: scaleY(0.95); }
    70%  { opacity: 1; transform: scaleY(1); }
    100% { opacity: 0; transform: scaleY(0); }
  }

  @keyframes lightning-h {
    0%   { opacity: 0; transform: scaleX(0); }
    10%  { opacity: 1; transform: scaleX(1); }
    50%  { opacity: 0.5; transform: scaleX(0.85); }
    70%  { opacity: 1; transform: scaleX(1); }
    100% { opacity: 0; transform: scaleX(0); }
  }

  @keyframes orb-pulse {
    0%, 100% { opacity: 0.08; transform: scale(1); }
    50%       { opacity: 0.35; transform: scale(1.25); }
  }

  @keyframes particle-float {
    0%   { opacity: 0;    transform: translate(0, 0) scale(0.8); }
    30%  { opacity: 0.55; transform: translate(var(--tx1), var(--ty1)) scale(1); }
    70%  { opacity: 0.4;  transform: translate(var(--tx2), var(--ty2)) scale(1.1); }
    100% { opacity: 0;    transform: translate(var(--tx3), var(--ty3)) scale(0.8); }
  }

  .ll-bolt-v {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    will-change: transform, opacity;
    transform-origin: top center;
  }

  .ll-bolt-h {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    will-change: transform, opacity;
    transform-origin: left center;
  }

  .ll-orb {
    position: absolute;
    border-radius: 50%;
    will-change: transform, opacity;
    filter: blur(28px);
  }

  .ll-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    will-change: transform, opacity;
    animation: particle-float var(--dur) ease-in-out var(--delay) infinite;
  }
`

const PARTICLES = [
  { x: 8,  y: 12, tx1: 40,  ty1: -60, tx2: -30, ty2: 80,  tx3: 20,  ty3: -40, dur: 7,  delay: 0   },
  { x: 20, y: 70, tx1: -50, ty1: 30,  tx2: 60,  ty2: -50, tx3: -20, ty3: 40,  dur: 9,  delay: 1.2 },
  { x: 35, y: 30, tx1: 30,  ty1: 70,  tx2: -40, ty2: -30, tx3: 50,  ty3: 20,  dur: 6,  delay: 2.5 },
  { x: 50, y: 85, tx1: -60, ty1: -40, tx2: 30,  ty2: 60,  tx3: -50, ty3: -20, dur: 8,  delay: 0.7 },
  { x: 65, y: 15, tx1: 50,  ty1: 40,  tx2: -20, ty2: -70, tx3: 30,  ty3: 50,  dur: 10, delay: 3.1 },
  { x: 78, y: 55, tx1: -30, ty1: 60,  tx2: 50,  ty2: -30, tx3: -40, ty3: 70,  dur: 7,  delay: 1.8 },
  { x: 90, y: 40, tx1: 20,  ty1: -50, tx2: -60, ty2: 30,  tx3: 40,  ty3: -60, dur: 9,  delay: 4.0 },
  { x: 15, y: 90, tx1: 60,  ty1: -20, tx2: -30, ty2: -50, tx3: 50,  ty3: 30,  dur: 6,  delay: 2.0 },
  { x: 42, y: 60, tx1: -40, ty1: 50,  tx2: 60,  ty2: 20,  tx3: -30, ty3: -60, dur: 8,  delay: 0.3 },
  { x: 58, y: 75, tx1: 30,  ty1: -60, tx2: -50, ty2: 40,  tx3: 20,  ty3: 60,  dur: 11, delay: 3.5 },
]

export function EnhancedLightningEffects() {
  const styleRef = useRef(null)

  useEffect(() => {
    if (!styleRef.current) {
      const el = document.createElement("style")
      el.textContent = styles
      document.head.appendChild(el)
      styleRef.current = el
    }
    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current)
        styleRef.current = null
      }
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {/* Vertical Bolt 1 */}
      <div
        className="ll-bolt-v"
        style={{
          left: "25%",
          background: "linear-gradient(to bottom, transparent, rgba(249,115,22,0.65), transparent)",
          boxShadow: "0 0 18px rgba(249,115,22,0.5)",
          animation: "lightning-v 4.4s ease-in-out 0s infinite",
        }}
      />

      {/* Vertical Bolt 2 */}
      <div
        className="ll-bolt-v"
        style={{
          left: "67%",
          background: "linear-gradient(to bottom, transparent, rgba(251,146,60,0.45), transparent)",
          boxShadow: "0 0 14px rgba(251,146,60,0.4)",
          animation: "lightning-v 6.3s ease-in-out 2s infinite",
        }}
      />

      {/* Horizontal Bolt */}
      <div
        className="ll-bolt-h"
        style={{
          top: "25%",
          background: "linear-gradient(to right, transparent, rgba(249,115,22,0.45), transparent)",
          boxShadow: "0 0 14px rgba(249,115,22,0.4)",
          animation: "lightning-h 7.35s ease-in-out 1s infinite",
        }}
      />

      {/* Diagonal Bolt */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "55%",
          width: "2px",
          height: "140%",
          transformOrigin: "top center",
          transform: "rotate(15deg)",
          background: "linear-gradient(to bottom, transparent, rgba(234,88,12,0.35), transparent)",
          boxShadow: "0 0 10px rgba(234,88,12,0.3)",
          willChange: "transform, opacity",
          animation: "lightning-v 5.1s ease-in-out 3.2s infinite",
        }}
      />

      {/* Orb 1 */}
      <div
        className="ll-orb"
        style={{
          top: "16%",
          right: "16%",
          width: "140px",
          height: "140px",
          background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%)",
          animation: "orb-pulse 4s ease-in-out 0s infinite",
        }}
      />

      {/* Orb 2 */}
      <div
        className="ll-orb"
        style={{
          bottom: "16%",
          left: "16%",
          width: "110px",
          height: "110px",
          background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)",
          animation: "orb-pulse 5s ease-in-out 2s infinite",
        }}
      />

      {/* Orb 3 - center */}
      <div
        className="ll-orb"
        style={{
          top: "50%",
          left: "50%",
          width: "80px",
          height: "80px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          animation: "orb-pulse 6s ease-in-out 1s infinite",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="ll-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            background:
              i % 3 === 0
                ? "rgba(249,115,22,0.5)"
                : i % 3 === 1
                ? "rgba(251,146,60,0.45)"
                : "rgba(234,88,12,0.4)",
            boxShadow: "0 0 6px rgba(249,115,22,0.4)",
            "--tx1": `${p.tx1}px`,
            "--ty1": `${p.ty1}px`,
            "--tx2": `${p.tx2}px`,
            "--ty2": `${p.ty2}px`,
            "--tx3": `${p.tx3}px`,
            "--ty3": `${p.ty3}px`,
            "--dur": `${p.dur}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
