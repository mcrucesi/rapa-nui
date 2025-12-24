import { useState, useEffect } from "react";

export const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    min: 0,
    seg: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = +new Date(targetDate) - +new Date();
      if (diff > 0) {
        setTimeLeft({
          dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
          horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
          min: Math.floor((diff / 1000 / 60) % 60),
          seg: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <span className="text-4xl md:text-6xl font-light">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
