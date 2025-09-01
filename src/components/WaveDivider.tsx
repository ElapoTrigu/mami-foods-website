type Props = {
  position?: "top" | "bottom";          // which side of the section
  color?: string;                        // the color of the wave (uses currentColor)
  height?: number;                       // px height of the wave band
  speed?: string;                        // e.g. "14s", "20s"
};

export default function WaveDivider({
  position = "bottom",
  color = "var(--color-mf-bg)",          // default to your light background
  height = 80,
  speed = "14s",
}: Props) {
  const sideClass = position === "top" ? "top-0 rotate-180" : "bottom-0";
  return (
    <div
      className={`pointer-events-none absolute left-0 w-full overflow-hidden leading-[0] ${sideClass}`}
      style={{ color }}                       // sets currentColor for the SVG fill
      aria-hidden
    >
      <div
        className={`relative w-[200%]`}
        style={{ height, animation: `waveSlide ${speed} linear infinite` }}
      >
        {/* two identical waves side by side to create a seamless loop */}
        <WaveSVG className="absolute left-0 top-0 w-1/2 h-full" />
        <WaveSVG className="absolute left-1/2 top-0 w-1/2 h-full" />
      </div>
    </div>
  );
}

/* The wave shape. Starts and ends at the same height so it tiles cleanly. */
function WaveSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className}>
      <path
        d="M0,40 C240,120 480,-40 720,40 C960,120 1200,-40 1440,40 V120 H0 Z"
        fill="currentColor"
      />
    </svg>
  );
}
