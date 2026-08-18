import Image from "next/image";

export function ProjectVisual({
  variant,
  image,
  alt,
}: {
  variant: "waveform" | "process";
  image?: string;
  alt?: string;
}) {
  if (image) {
    return (
      <div className="project-visual-image">
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  if (variant === "waveform") {
    const bars = Array.from({ length: 48 }, (_, i) => {
      const seed = Math.sin(i * 12.9898) * 43758.5453;
      const h = 8 + Math.abs(seed - Math.floor(seed)) * 78;
      return Math.round(h * 100) / 100;
    });

    return (
      <svg viewBox="0 0 960 400" preserveAspectRatio="none" aria-hidden="true">
        <rect width="960" height="400" fill="var(--surface)" />
        <line x1="0" y1="200" x2="960" y2="200" stroke="var(--line)" strokeWidth="1" />
        {bars.map((h, i) => {
          const x = 20 + i * 19.7;
          const isAccent = i % 8 === 3;

          return (
            <rect
              key={i}
              x={x}
              y={200 - h}
              width="8"
              height={h * 2}
              fill={isAccent ? "var(--accent)" : "var(--line-strong)"}
              opacity={isAccent ? 0.9 : 0.7}
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 960 400" preserveAspectRatio="none" aria-hidden="true">
      <rect width="960" height="400" fill="var(--surface)" />
      <rect x="40" y="40" width="300" height="320" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <rect x="360" y="40" width="560" height="150" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <rect x="360" y="210" width="560" height="150" fill="none" stroke="var(--line-strong)" strokeWidth="1" />

      {Array.from({ length: 8 }, (_, i) => (
        <rect
          key={i}
          x="64"
          y={72 + i * 34}
          width={220 - (i % 3) * 40}
          height="10"
          fill="var(--line-strong)"
        />
      ))}

      <circle
        cx="640"
        cy="115"
        r="46"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        opacity="0.85"
      />

      <path
        d="M640 69 A46 46 0 0 1 686 115"
        fill="none"
        stroke="var(--depth)"
        strokeWidth="2"
      />

      {Array.from({ length: 5 }, (_, i) => (
        <rect
          key={i}
          x="400"
          y={255 + i * 20}
          width={480 - i * 60}
          height="7"
          fill="var(--line-strong)"
        />
      ))}
    </svg>
  );
}
