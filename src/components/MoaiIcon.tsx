export const MoaiIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cuerpo principal - Gris Piedra Oscuro */}
      <path
        d="M 40 100 L 35 70 L 35 40 L 40 20 L 60 20 L 65 40 L 65 70 L 60 100 Z"
        fill="#4A4A4A"
      />

      {/* Plano frontal - Un poco más claro para dar volumen */}
      <path
        d="M 42 95 L 40 70 L 40 45 L 42 25 L 58 25 L 60 45 L 60 70 L 58 95 Z"
        fill="#666666"
      />

      {/* Nariz y Cejas - Los rasgos más importantes con sombra proyectada */}
      <path
        d="M 48 50 L 45 55 L 48 70 L 52 70 L 55 55 L 52 50 Z"
        fill="#333333"
      />
      <rect x="42" y="35" width="16" height="4" fill="#333333" />

      {/* Labios - Sutil línea de sombra */}
      <rect x="44" y="80" width="12" height="2" fill="#222222" opacity="0.5" />

      {/* Iluminación lateral (Rim light) - Esto le dará el toque "pro" */}
      <path d="M 35 70 L 35 40 L 37 40 L 37 70 Z" fill="white" opacity="0.1" />
    </svg>
  );
};
