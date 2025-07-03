import { React, useEffect, useState } from 'react'

const CountdownTimer = ({endTime}) => {

    const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);


    return (
        <div>
            <div className="flex items-center space-x-2 bg-red-100 px-3 py-2 rounded-lg">
                <span className="text-red-600 font-semibold text-sm">Ends in:</span>
                <div className="flex space-x-1">
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <span className="text-red-600">:</span>
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <span className="text-red-600">:</span>
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountdownTimer