export default function Porthole() {
  // Decorative: hidden from screen readers
  return (
    <svg className="porthole" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="92" className="ph-rim" />
      <circle cx="100" cy="100" r="72" className="ph-glass" />
      <g className="ph-spin">
        <path d="M40 100c20-26 40 26 60 0s40 26 60 0" className="ph-wave" />
        <path d="M40 122c20-26 40 26 60 0s40 26 60 0" className="ph-wave" />
      </g>
    </svg>
  );
}