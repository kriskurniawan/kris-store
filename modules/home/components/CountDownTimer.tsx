'use client'

import { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(4 * 24 * 60 * 60);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(countdownInterval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return (
        <>
            <div className="flex gap-2">
                <div className="w-14 h-16 flex flex-col bg-gray-600 justify-center items-center rounded-lg">
                    <span className='font-semibold text-white'>{days}</span>
                    <span className='font-normal text-white'>Days</span>
                </div>
                <div className="w-14 h-16 flex flex-col bg-gray-600 justify-center items-center rounded-lg">
                    <span className='font-semibold text-white'>{hours}</span>
                    <span className='font-normal text-white'>Hour</span>
                </div>
                <div className="w-14 h-16 flex flex-col bg-gray-600 justify-center items-center rounded-lg">
                    <span className='font-semibold text-white'>{minutes}</span>
                    <span className='font-normal text-white'>Min</span>
                </div>
                <div className="w-14 h-16 flex flex-col bg-gray-600 justify-center items-center rounded-lg">
                    <span className='font-semibold text-white'>{seconds}</span>
                    <span className='font-normal text-white'>Sec</span>
                </div>
            </div>
        </>
    );
};

export default CountdownTimer;
