import React from 'react';

interface StarProps {
    count?: number;
}

const Star = (props: StarProps) => {
    const count = 5 || 0;
    const fillColor = count < 5 ? 'fill-slate-300' : 'fill-orange-400'; // Ganti warna jika jumlah kurang dari 5

    const stars = Array.from({ length: count }, (_, index) => index);

    return (
        <>
            {stars.map((star, index) => (
                <svg
                    key={index}
                    className={fillColor}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z" />
                </svg>
            ))}
        </>
    );
};

export default Star;
