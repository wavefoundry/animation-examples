import React from "react";
import gsap, { Power1 } from "gsap";

const Turtle: React.FC<{ index: number }> = ({ index }) => {
  // Since there are two animated turtles, add an index to ensure each id attribute is unique
  const turtle = React.useRef<SVGSVGElement>(null);
  const eye = React.useRef<SVGPathElement>(null);
  const timeline = gsap.timeline({ repeat: -1, yoyo: true });
  React.useEffect(() => {
    timeline.fromTo(
      turtle.current,
      { rotationX: -5, transformOrigin: "bottom 0%", duration: 2.5 },
      { rotation: 5, ease: Power1.easeInOut, duration: 2.5 },
      0
    );
    timeline.to(
      turtle.current,
      { y: -36, ease: Power1.easeInOut, duration: 1.5 },
      0
    );
    timeline.fromTo(
      eye.current,
      {
        scaleY: 0.1,
        transformOrigin: "50% 50%",
        repeatDelay: 3,
        duration: 0.1,
      },
      {
        scaleY: 1,
        transformOrigin: "50% 50%",
        repeatDelay: 3,
        duration: 0.1,
      },
      0
    );
  }, []);
  return (
    <svg
      ref={turtle}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 148.35 85.15"
      style={{ width: "100%" }}
    >
      <defs>
        <linearGradient
          id={`linear-gradient-${index}`}
          x1="51.57"
          y1="-1.09"
          x2="97.89"
          y2="79.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8cc63f" />
          <stop offset=".05" stopColor="#83c141" />
          <stop offset=".44" stopColor="#459d4d" />
          <stop offset=".77" stopColor="#208755" />
          <stop offset="1" stopColor="#127f58" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-2-${index}`}
          x1="148.13"
          y1="34.71"
          x2="118.74"
          y2="34.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8cc63f" stopOpacity="0" />
          <stop offset=".06" stopColor="#74ad3d" stopOpacity=".17" />
          <stop offset=".21" stopColor="#41753a" stopOpacity=".54" />
          <stop offset=".39" stopColor="#1c4e37" stopOpacity=".8" />
          <stop offset=".61" stopColor="#063735" stopOpacity="1" />
          <stop offset="1" stopColor="#003035" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-3-${index}`}
          x1="110.42"
          y1="55.59"
          x2="66.26"
          y2="55.59"
          xlinkHref={`#linear-gradient-2-${index}`}
        />
        <linearGradient
          id={`linear-gradient-4-${index}`}
          x1="38.11"
          y1="24.14"
          x2="57.54"
          y2="43.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8cc63f" stopOpacity="0" />
          <stop offset=".07" stopColor="#62993c" stopOpacity=".3" />
          <stop offset=".17" stopColor="#366a39" stopOpacity=".61" />
          <stop offset=".3" stopColor="#174937" stopOpacity=".84" />
          <stop offset=".49" stopColor="#053535" stopOpacity="1" />
          <stop offset="1" stopColor="#003035" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-5-${index}`}
          x1="37.93"
          y1="21.62"
          x2="129.75"
          y2="21.62"
          xlinkHref={`#linear-gradient-${index}`}
        />
        <linearGradient
          id={`linear-gradient-6-${index}`}
          x1="48.61"
          y1="70.09"
          x2="101.13"
          y2="70.09"
          xlinkHref={`#linear-gradient-4-${index}`}
        />
        <linearGradient
          id={`linear-gradient-7-${index}`}
          x1="3.25"
          y1="46.25"
          x2="53.79"
          y2="46.25"
          xlinkHref={`#linear-gradient-4-${index}`}
        />
        <linearGradient
          id={`linear-gradient-8-${index}`}
          x1="58.22"
          y1="-1.22"
          x2="84.4"
          y2="24.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d1ffcd" stopOpacity="1" />
          <stop offset=".1" stopColor="#b7edbd" stopOpacity=".78" />
          <stop offset=".35" stopColor="#7dc799" stopOpacity=".5" />
          <stop offset=".57" stopColor="#4fa87d" stopOpacity=".29" />
          <stop offset=".76" stopColor="#2e9269" stopOpacity=".13" />
          <stop offset=".91" stopColor="#19845d" stopOpacity=".04" />
          <stop offset="1" stopColor="#127f58" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-9-${index}`}
          x1="139.25"
          y1="24"
          x2="139.25"
          y2="34.95"
          xlinkHref={`#linear-gradient-8-${index}`}
        />
        <linearGradient
          id={`linear-gradient-10-${index}`}
          x1="52.21"
          y1="44.12"
          x2="52.21"
          y2="67.69"
          xlinkHref={`#linear-gradient-8-${index}`}
        />
        <linearGradient
          id={`linear-gradient-11-${index}`}
          x1="18.74"
          y1="21.54"
          x2="18.74"
          y2="40.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d1ffcd" stopOpacity="1" />
          <stop offset=".09" stopColor="#cefdc8" stopOpacity=".87" />
          <stop offset=".24" stopColor="#c7f7b9" stopOpacity=".77" />
          <stop offset=".43" stopColor="#bbeda0" stopOpacity=".62" />
          <stop offset=".65" stopColor="#abe07f" stopOpacity=".4" />
          <stop offset=".89" stopColor="#96cf54" stopOpacity=".13" />
          <stop offset="1" stopColor="#8cc63f" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g id={`Layer_2-${index}`} data-name="Layer 2">
        <g id={`Layer_2-2-${index}`} data-name="Layer 2">
          <path
            d="M139.33 24.17c-1.7-.48-3.81.31-5.94.81-3.26.77-4.12.44-4.58-.25-3.67-3-13.3-18.56-44.8-19.46-29.18-.83-41.19 12.58-47.3 20.64-1.63 2.14-4.4 1.87-6.36 0-5.27-5-14.45-5.39-20-3.08C2.2 26.24.05 35.73 0 41.23 0 44 1 43 2 42.85c1.11-.2 1.25.07 1.25.07.52 3.22 5 8.45 11.06 9.06a23.82 23.82 0 0020.38-7.62c2.14-2.45 5-3 7.81-3.19 6.31-.31 8.73 1.69 11.34 3.58-.78 4.55-5.84 7.19-5.24 12.1.92 7.67 9.83 26.67 17.29 27.93 10.38 1.76 37.82-3.18 37.46-12.56-.11-3-7.42-3.94-14-5.06-10.65-1.81-14.47-9.71-16.27-14.94-.95-2.75 3-5.29 3-5.29s7.84-.17 10.08-.42c16.33-1.76 23.67-7.47 31.9-13.8.55.07 7.36 6.91 8.43 7.76 1.82 1.46 3.73 4.05 7.06 3.69 4.57-.5 14.8-4 14.77-8.56s-5.93-10.6-8.99-11.43z"
            fill={`url(#linear-gradient-${index})`}
          />
          <path
            className="cls-2"
            d="M.64 43.13a24 24 0 014.46-1C6.64 42 8.13 42 9.64 42a11 11 0 004.23-.75 10.23 10.23 0 001.88-1.11c.64-.41 1.24-.86 1.89-1.26-.5.58-1 1.1-1.58 1.64a8.41 8.41 0 01-1.84 1.43 9.68 9.68 0 01-4.56 1c-1.51 0-3-.06-4.51-.08s-3 .23-4.51.26z"
          />
          <g ref={eye}>
            <circle className="cls-3" cx="11.92" cy="33.76" r="3.84" />
            <circle className="cls-2" cx="12.33" cy="34.42" r="3.19" />
            <circle className="cls-3" cx="10.14" cy="32.67" r=".94" />
          </g>
          <path
            d="M129.42 25.22l-10.68 8s4.22 4 7.84 7.36c2.12 1.95 4 3.61 6 3.64 4.8.06 11.64-3.21 13.61-4.93 1.61-1.41 2.07-2.63 1.88-2.61L134 41a2.69 2.69 0 01-2.61-.3l-7-6.9a1.21 1.21 0 010-1.67l7.23-6.88a12.22 12.22 0 01-1.39.08 2.11 2.11 0 01-.81-.11z"
            fill={`url(#linear-gradient-2-${index})`}
          />
          <path
            d="M110.42 38.45s-5.43 4.7-18.79 7.28a102.2 102.2 0 01-15.53 1.2c-1.21.79-3.6 2.94-3.1 4.91a21.88 21.88 0 008.22 12.21c5.81 3.92 12.63 3.17 19 5.39 3.72 1.3 3.12 3.27 3.12 3.27L83.1 72a7.93 7.93 0 01-6-3.06l-9.88-12.7a4.56 4.56 0 01-.27-5.24l4-6.32a79.64 79.64 0 0020.3-.52c12.3-1.91 19.17-5.71 19.17-5.71z"
            fill={`url(#linear-gradient-3-${index})`}
          />
          <path
            d="M38 24.23l-1.3 1.67s8.06 8.33 12.41 11.1c1.87 1.19 10 5 10 5S53 38.85 49.5 35.45C46.25 32.3 38 24.23 38 24.23z"
            fill={`url(#linear-gradient-4-${index})`}
          />
          <path
            d="M37.56 20.67a2 2 0 00-.16 2.87c3.76 4.27 14.91 16.33 23.2 19 15.48 5 37.12 2.72 51.12-4.75 4-2.14 13.27-9.15 17.8-12.63a3 3 0 00.36-4.62C120.42 12.81 108 1 77.22 2.78 57.81 3.9 42.25 16.46 37.56 20.67z"
            fill="#004f35"
          />
          <path
            d="M38.59 18.36a2.11 2.11 0 00-.16 2.9C42.1 25.57 53 37.77 61.12 40.46c15.13 5 36.29 2.75 50-4.8 3.91-2.16 13-9.25 17.4-12.76a3.11 3.11 0 00.35-4.67C119.6 10.41 107.46-1.51 77.37.28 58.4 1.41 43.19 14.11 38.59 18.36z"
            fill={`url(#linear-gradient-5-${index})`}
          />
          <path
            d="M48.64 55s-.71 5.08 5.11 16.26C57 77.51 60.55 82.52 64 84.13c4.34 2 15.11.56 19-.2 14.74-2.87 18.12-7.11 18.12-7.11L98.8 77a9.19 9.19 0 00-1.74.27c-4.19 1.08-23.12 5.68-30.8 2.95-5.48-2-14-19.08-14-19.08z"
            fill={`url(#linear-gradient-6-${index})`}
          />
          <path
            d="M8.46 49.85c4.35 3 10.31 2.36 13.77 1.68a22.8 22.8 0 0010.38-5.16c1.82-1.55 3.44-4.22 7.41-4.93a20.83 20.83 0 018.71.41 18.64 18.64 0 015.06 2.9l-.3-.57a19 19 0 00-4.58-3c-2.76-1-9-.92-11.26-.25s-9.34 9.25-18.43 9.82c-11.37.71-15.33-7-15.33-7l-.64-.62s.61 3.54 5.21 6.72z"
            fill={`url(#linear-gradient-7-${index})`}
          />
          <path
            className="cls-11"
            d="M69.62 5.58l6.14 4a1 1 0 00.54.16h19a1 1 0 00.66-.25l4.5-4a1 1 0 00-.46-1.7 78.48 78.48 0 00-15.36-1.62A75.2 75.2 0 0070 3.76a1 1 0 00-.38 1.82zM74.31 11.84L61.66 36.12a1 1 0 01-1.42.38 107.87 107.87 0 01-11.67-8.65c-1.76-1.52-5.92-6.17-7.56-8a1 1 0 01.12-1.44 128.68 128.68 0 0110.94-8A52.24 52.24 0 0164.3 4.85a1 1 0 01.8.12l8.9 5.56a1 1 0 01.31 1.31zM77.32 11.9l18.11-.41a1 1 0 01.86.45l13.5 20.68a1 1 0 01-.43 1.46A78.18 78.18 0 0187.6 39.6c-8.73 1-18.67-.56-22.15-1.19a1 1 0 01-.73-1.41l11.72-24.53a1 1 0 01.88-.57zM98.53 10.07l5.2-4.43a1 1 0 011-.16c2 .85 8.5 3.74 11.74 6a86.91 86.91 0 0110.15 8.28 1 1 0 010 1.46c-1.37 1.21-4.15 3.67-5.49 4.76-1.57 1.27-5.67 4.27-7.43 5.55a1 1 0 01-1.4-.24L98.36 11.4a1 1 0 01.17-1.33z"
          />
          <path
            d="M38.43 21.26c-.9-1.27-.59-2.22.94-3.6A80.91 80.91 0 0155.9 6.37C65.93 1.19 75.47-.4 87 .08a69.09 69.09 0 0118.7 3.43l-1.92 2.12s-7.84-.86-28.07 2.3C55.93 11 41.8 25.06 41.8 25.06z"
            fill={`url(#linear-gradient-8-${index})`}
          />
          <path
            d="M131.84 25.27s1.69-.34 3.28-.76a8.72 8.72 0 014-.42c2.55.5 6.85 5 7.92 7.32a9.31 9.31 0 01.88 3.55s-5.72-7.91-8.81-8.79c-1.92-.54-8.47.53-8.47.53z"
            fill={`url(#linear-gradient-9-${index})`}
          />
          <path
            d="M53.44 44.12a5.19 5.19 0 01.35.63 10.27 10.27 0 01-1.76 4 25.78 25.78 0 00-3.23 5.51c-.72 2.44.41 5.64.41 5.64l6.65 7.84s-4.17-9.37-3.93-12c.17-1.92 3.24-10.31 3.24-10.31z"
            fill={`url(#linear-gradient-10-${index})`}
          />
          <path
            d="M0 40.41s.62-7.08 3.07-11a15.38 15.38 0 0110.8-7.54A22.79 22.79 0 0126 23.09a21.84 21.84 0 015 3.37 3.9 3.9 0 005.66-.55l.74.76s-2.32 2.15-5 1.65c-5.75-1.06-6.83-6.78-19.08-4.42C2 26.07 2.26 39.35 2.26 39.35z"
            fill={`url(#linear-gradient-11-${index})`}
          />
        </g>
      </g>
    </svg>
  );
};

export default Turtle;
