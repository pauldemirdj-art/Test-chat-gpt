const palettes = [
  { stone: '#8a7a68', stoneDark: '#5f5344', mortar: '#a89a86', floor: '#4a4038' },
  { stone: '#7d8577', stoneDark: '#545a4d', mortar: '#96a08c', floor: '#3f4438' },
  { stone: '#9b8570', stoneDark: '#6b5943', mortar: '#b6a189', floor: '#4d4032' },
  { stone: '#867a7d', stoneDark: '#5a5052', mortar: '#a2949a', floor: '#403a3c' },
];

export default function CaveIllustration({
  variant = 0,
  className = '',
}: {
  variant?: number;
  className?: string;
}) {
  const p = palettes[variant % palettes.length];
  const uid = `cave-${variant}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label="Illustration d'une cave voûtée en pierre"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.stoneDark} />
          <stop offset="100%" stopColor="#1c1a17" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffd9a0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${uid}-bg)`} />

      {/* Vaulted arches receding into the distance */}
      {[0, 1, 2, 3].map((i) => {
        const scale = 1 - i * 0.16;
        const w = 260 * scale;
        const h = 190 * scale;
        const x = 200 - w / 2;
        const y = 230 - h;
        return (
          <path
            key={i}
            d={`M ${x} 230 L ${x} ${y + h * 0.45} Q ${x} ${y} ${x + w / 2} ${y} Q ${x + w} ${y} ${x + w} ${y + h * 0.45} L ${x + w} 230`}
            fill="none"
            stroke={i === 0 ? p.stone : p.mortar}
            strokeWidth={6 * scale}
            opacity={0.9 - i * 0.12}
          />
        );
      })}

      {/* Floor */}
      <path d="M 60 230 L 340 230 L 400 300 L 0 300 Z" fill={p.floor} opacity="0.9" />

      {/* Warm light glow from the far end */}
      <ellipse cx="200" cy="150" rx="120" ry="110" fill={`url(#${uid}-glow)`} />

      {/* Hanging bulb */}
      <line x1="200" y1="70" x2="200" y2="112" stroke="#3a352f" strokeWidth="2" />
      <circle cx="200" cy="118" r="7" fill="#ffe6b3" />
      <circle cx="200" cy="118" r="16" fill="#ffe6b3" opacity="0.25" />

      {/* Storage crates */}
      <g opacity="0.9">
        <rect x="70" y="195" width="38" height="32" rx="2" fill="#6b4a32" />
        <rect x="70" y="195" width="38" height="6" fill="#7d5738" />
        <rect x="112" y="205" width="30" height="22" rx="2" fill="#7a5738" />
      </g>
      <g opacity="0.9">
        <rect x="292" y="198" width="34" height="29" rx="2" fill="#5c4530" />
        <rect x="330" y="207" width="24" height="20" rx="2" fill="#6b4a32" />
      </g>
    </svg>
  );
}
