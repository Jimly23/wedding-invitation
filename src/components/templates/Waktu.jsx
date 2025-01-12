import React, { useState, useEffect } from 'react';

const Waktu = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-02-02T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
        <div key={interval} className="text-center">
            <span className="block text-xl font-bold">{timeLeft[interval]}</span>
            <span className="block font-medium text-[10px]">{interval.toUpperCase()}</span>
        </div>
    );
  });

  return (
    <div>
      {timerComponents.length ? <div className='grid grid-cols-4 gap-6'>
        {timerComponents.map((waktu)=>(
            <div className='bg-background rounded-lg py-1 text-white'>
                {waktu}
            </div>
        ))}
      </div> : <span>Time's up!</span>}
    </div>
  );
};

export default Waktu;
