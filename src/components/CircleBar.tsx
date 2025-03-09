import React from 'react';

const CircleBar = ({percent, circleWidth}) => {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray*percent)/100;
    return (
    <div>
        <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <defs>
            <linearGradient id='gradient'>
                <stop offset="10%" stop-color="#a22222"/>
                <stop offset="50%" stop-color="#c4c440"/>
                <stop offset="100%" stop-color="#e444d4"/>
            </linearGradient>
        </defs>

            <circle cx={circleWidth/2} cy={circleWidth/2} strokeWidth="15px" r={radius} className="circle-background"/>
            <circle cx={circleWidth/2} cy={circleWidth/2} strokeWidth="15px" r={radius} className="circle-progress" 
            style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
            }}
            transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
            stroke="url(#gradient)"
            />
            <text x="50%" y="50%" dy="0.3em" textAnchor='middle' className="circle-text" fill='url(#gradient)'>
                {percent}%
            </text>
        </svg>
    </div>
    );
};

export default CircleBar;