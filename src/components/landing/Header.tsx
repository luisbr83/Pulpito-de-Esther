'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    const difference = endOfDay.getTime() - now.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft] && timeLeft[interval as keyof typeof timeLeft] !== 0) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}{interval !== 'seconds' ? ':' : ''}
      </span>
    );
  });

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <div className="text-center">
            <p className="text-sm text-primary font-semibold">¡La oferta termina en!</p>
            <div className="text-3xl font-bold text-accent font-mono">
                {timerComponents.length ? timerComponents : <span>00:00:00</span>}
            </div>
        </div>
      </div>
    </header>
  );
}
