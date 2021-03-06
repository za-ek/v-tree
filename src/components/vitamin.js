import React from 'react';
import './vitamin.css';
const colorEdge = (hue) => {
	if (hue > 360) {
		hue = hue - 360;
	}
	return `hsl(${hue},100%,50%)`;
}
const Vitamin = props => {
    const unicId = () => `d${Math.floor(Math.random()*360)}`;
    const unicIdResult = unicId();
    const unicIdResult2 = unicId();
   return <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 98.65 98.65"
    {...props}
  >
    <defs>
    <filter id="blur1" x="0" y="0">
    	<feGaussianBlur in="SourceGraphic" stdDeviation="4" />
    </filter>
      <linearGradient
        id={unicIdResult}
        x1={17.8}
        y1={49.32}
        x2={80.85}
        y2={49.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffbc46" />
        <stop offset={0.99} stopColor={colorEdge(props.hue)} />
      </linearGradient>
      <radialGradient
        id="a"
        cx={78.57}
        cy={62.82}
        r={64.95}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={0} stopColor="#fff" stopOpacity={0.99} />
        <stop offset={0.05} stopColor="#fff" stopOpacity={0.8} />
        <stop offset={0.1} stopColor="#fff" stopOpacity={0.63} />
        <stop offset={0.15} stopColor="#fff" stopOpacity={0.48} />
        <stop offset={0.21} stopColor="#fff" stopOpacity={0.35} />
        <stop offset={0.27} stopColor="#fff" stopOpacity={0.24} />
        <stop offset={0.34} stopColor="#fff" stopOpacity={0.15} />
        <stop offset={0.42} stopColor="#fff" stopOpacity={0.08} />
        <stop offset={0.52} stopColor="#fff" stopOpacity={0.04} />
        <stop offset={0.66} stopColor="#fff" stopOpacity={0.01} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <radialGradient id="c" cx={31.07} cy={23.82} r={64.95} xlinkHref="#a" />
      <linearGradient
        id={unicIdResult2}
        x1={686.69}
        y1={2014.87}
        x2={785.34}
        y2={2014.87}
        gradientUnits="userSpaceOnUse"
      >
      <stop offset={0} stopColor="#ffbc46" />
        <stop offset={0.99} stopColor={colorEdge(props.hue)} />
      </linearGradient>
      <radialGradient
        id="e"
        cx={774.63}
        cy={2037.44}
        r={110.82}
        xlinkHref="#a"
      />
      <radialGradient
        id="f"
        cx={706.97}
        cy={1981.44}
        r={110.82}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={0.01} stopColor="#fff" stopOpacity={0.96} />
        <stop offset={0.05} stopColor="#fff" stopOpacity={0.78} />
        <stop offset={0.09} stopColor="#fff" stopOpacity={0.61} />
        <stop offset={0.14} stopColor="#fff" stopOpacity={0.47} />
        <stop offset={0.2} stopColor="#fff" stopOpacity={0.34} />
        <stop offset={0.25} stopColor="#fff" stopOpacity={0.23} />
        <stop offset={0.32} stopColor="#fff" stopOpacity={0.15} />
        <stop offset={0.4} stopColor="#fff" stopOpacity={0.08} />
        <stop offset={0.49} stopColor="#fff" stopOpacity={0.03} />
        <stop offset={0.63} stopColor="#fff" stopOpacity={0.01} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>      
    </defs> 
    <circle cx={58.81} cy={55.32} r={28.83} fill={colorEdge(props.hue)} filter="url(#blur1)"  />
    <circle cx={49.32} cy={49.32} r={31.52} fill={`url(#${unicIdResult})`} />
    <circle cx={49.32} cy={49.32} r={31.52} fill="url(#a)" />
    <circle cx={49.32} cy={49.32} r={31.52} fill="url(#c)" />
    <text
      transform="translate(35.64 63.2)"
      fontSize={25.05}
      fill="#fff"
      transform="translate(41 58)"
      className="vitamin-index"
    >
      {props.vitaminname}
    </text>
    <text
      transform="translate(58 50)"
      fontSize={20}
      fill="#fff"
      className="vitamin-index"
    >
      {props.vitaminindex}
    </text>
    <path
      d="M736 2064.19a49.32 49.32 0 1 1 49.32-49.32 49.38 49.38 0 0 1-49.32 49.32zm0-90.49a41.17 41.17 0 1 0 41.17 41.17A41.21 41.21 0 0 0 736 1973.7z"
      transform="translate(-686.69 -1965.54)"
      fill={`url(#${unicIdResult2})`}
    />
    <path
      d="M736 2064.19a49.32 49.32 0 1 1 49.32-49.32 49.38 49.38 0 0 1-49.32 49.32zm0-90.49a41.17 41.17 0 1 0 41.17 41.17A41.21 41.21 0 0 0 736 1973.7z"
      transform="translate(-686.69 -1965.54)"
      fill="url(#e)"
    />
    <path
      d="M736 2064.19a49.32 49.32 0 1 1 49.32-49.32 49.38 49.38 0 0 1-49.32 49.32zm0-90.49a41.17 41.17 0 1 0 41.17 41.17A41.21 41.21 0 0 0 736 1973.7z"
      transform="translate(-686.69 -1965.54)"
      fill="url(#f)"
    />
  </svg>
}

export default Vitamin
