"use client"

export function LightningEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Vertical Lightning Bolts */}
      <div className="lightning-v lightning-v-1" />
      <div className="lightning-v lightning-v-2" />
      <div className="lightning-v lightning-v-3" />

      {/* Horizontal Lightning */}
      <div className="lightning-h lightning-h-1" />
      <div className="lightning-h lightning-h-2" />

      {/* Corner Glows */}
      <div className="lightning-corner lightning-corner-tr" />
      <div className="lightning-corner lightning-corner-bl" />

      <style>{`
        /* Vertical bolts */
        .lightning-v {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(249, 115, 22, 0.5),
            transparent
          );
          opacity: 0;
          transform-origin: top center;
          will-change: opacity;
        }

        .lightning-v-1 {
          left: 25%;
          animation: flash-v 0.4s ease-in-out 0s infinite;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-play-state: running;
          /* flash every 4.4s total */
          animation: flash-v 4.4s ease-in-out 0s infinite;
        }

        .lightning-v-2 {
          right: 33%;
          opacity: 0.8;
          animation: flash-v 6.3s ease-in-out 2s infinite;
        }

        .lightning-v-3 {
          left: 75%;
          animation: flash-v 8.25s ease-in-out 4s infinite;
        }

        /* Horizontal bolts */
        .lightning-h {
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(249, 115, 22, 0.35),
            transparent
          );
          opacity: 0;
          will-change: opacity;
        }

        .lightning-h-1 {
          top: 25%;
          animation: flash-h 7.35s ease-in-out 1s infinite;
        }

        .lightning-h-2 {
          bottom: 33%;
          animation: flash-h 9.4s ease-in-out 3s infinite;
        }

        /* Corner glows */
        .lightning-corner {
          position: absolute;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          opacity: 0;
          will-change: opacity;
        }

        .lightning-corner-tr {
          top: 0;
          right: 0;
          background: radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%);
          animation: flash-h 5.2s ease-in-out 2.5s infinite;
        }

        .lightning-corner-bl {
          bottom: 0;
          left: 0;
          background: radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 70%);
          animation: flash-h 6.15s ease-in-out 1.5s infinite;
        }

        /* Keyframes — pure CSS, runs on compositor, zero JS */
        @keyframes flash-v {
          0%   { opacity: 0; transform: scaleY(0); }
          2%   { opacity: 1; transform: scaleY(1); }
          4%   { opacity: 0.8; }
          6%   { opacity: 1; transform: scaleY(0.9); }
          8%   { opacity: 0; transform: scaleY(0); }
          100% { opacity: 0; }
        }

        @keyframes flash-h {
          0%   { opacity: 0; transform: scaleX(0); }
          2%   { opacity: 1; transform: scaleX(1); }
          4%   { opacity: 0.5; }
          6%   { opacity: 1; transform: scaleX(0.8); }
          8%   { opacity: 0; transform: scaleX(0); }
          100% { opacity: 0; }
        }

        /* On mobile — reduce to just 1 bolt each direction */
        @media (max-width: 768px) {
          .lightning-v-2,
          .lightning-v-3,
          .lightning-h-2,
          .lightning-corner-bl {
            display: none;
          }
        }

        /* Respect user's reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .lightning-v,
          .lightning-h,
          .lightning-corner {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
