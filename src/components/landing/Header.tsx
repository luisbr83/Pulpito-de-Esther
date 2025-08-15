'use client';

import { useEffect, useState } from 'react';

type TimeLeft = {
    hours: number;
    minutes: number;
    seconds: number;
};

export default function Header() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const endOfPeriod = new Date(now);
    
    // Set the end time to the next 12-hour mark (e.g., 12:00 or 00:00)
    const currentHour = now.getHours();
    if (currentHour < 12) {
        endOfPeriod.setHours(11, 59, 59, 999);
    } else {
        endOfPeriod.setHours(23, 59, 59, 999);
    }

    const difference = endOfPeriod.getTime() - now.getTime();

    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      return {
        hours: hours > 12 ? hours % 12 : hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    return { hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    // Código original do cronômetro (desativado, mas preservado)
    // setTimeLeft(calculateTimeLeft());
    // const timer = setInterval(() => {
    //   setTimeLeft(calculateTimeLeft());
    // }, 1000);
    // return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <div className="text-center">
          {/* Cronômetro oculto */}
          {false && (
            <>
              <p className="text-sm text-primary font-semibold">¡La oferta termina en!</p>
              <div className="text-3xl font-bold text-accent font-mono">
                  {timeLeft ? (
                      <>
                          <span>{formatTime(timeLeft.hours)}</span>:
                          <span>{formatTime(timeLeft.minutes)}</span>:
                          <span>{formatTime(timeLeft.seconds)}</span>
                      </>
                  ) : (
                      <span>00:00:00</span>
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
