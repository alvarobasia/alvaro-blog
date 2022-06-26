export function Texture() {
  return (
    <svg id="texture" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'calc(100vh + 200px)',
      opacity: .25,
      pointerEvents: 'none',
      transform: 'translateY(0)',
      filter: 'contrast(120%) brightness(60%)',
      zIndex: '1900',
    }}>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency=".999" numOctaves="1" stitchTiles="stitch"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  );
}
