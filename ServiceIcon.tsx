import React from "react";
import gsap from "gsap";
import {
  indigo,
  blue,
  green,
  cyan,
  teal,
  deepPurple,
} from "@material-ui/core/colors";
import GraphIcon from "./GraphIcon"; // Omitted this file for brevity
import CodeIcon from "./CodeIcon"; // Omitted this file for brevity
import UserIcon from "./UserIcon"; // Omitted this file for brevity
import MoneyIcon from "./MoneyIcon"; // Omitted this file for brevity
import SEOIcon from "./SEOIcon"; // Omitted this file for brevity
import DesignIcon from "./DesignIcon";

const shapes = [
  {
    backgroundTo:
      "M16.29 147.26C-19.61 92.47 27.16 -3.24 86.08 3.46C145.24 10.4 216.55 119.74 193.28 167.6C170.02 215.45 51.94 201.81 16.29 147.26Z",
    backgroundFrom:
      "M7.79 122.07C-28.12 64.79 111.78 -3.52 170.69 3.48C229.86 10.73 181.73 127.59 158.47 177.62C135.2 227.65 43.44 179.11 7.79 122.07Z",
  },
  {
    backgroundFrom:
      "M198.45 134.82C194.73 160.43 167.57 181.31 141.54 191.31C115.66 201.14 90.92 200.26 66.18 189.38C41.58 178.5 16.99 157.8 6.55 126.22C-3.75 94.64 0.11 52.18 18.42 27.97C36.86 3.94 69.75 -1.68 96.07 4.81C122.52 11.13 142.4 29.55 162.27 54.11C182.15 78.5 202.03 109.03 198.45 134.82Z",
    backgroundTo:
      "M186.32 140.52C182.6 165.77 168.79 179.56 142.76 189.42C116.88 199.11 52.47 203.43 27.73 192.71C3.13 181.99 18.21 156.39 7.77 125.25C-2.52 94.12 1.67 44.68 19.98 20.81C38.42 -2.88 131.16 -0.43 157.48 5.97C183.93 12.19 168.85 42.73 188.73 66.94C208.6 90.98 189.89 115.09 186.32 140.52Z",
  },
  {
    backgroundTo:
      "M182.88 88.75C187.55 108.5 199.06 124.67 198.56 140.5C198.23 156.5 185.88 172.01 170.2 177.39C154.52 182.94 135.67 178.37 113.65 182.62C91.63 186.86 66.44 199.76 45.25 196.17C24.23 192.41 7.05 172.01 4.55 150.13C2.21 128.42 14.56 105.57 21.9 80.26C29.24 54.96 31.74 27.37 46.75 14.15C61.77 0.93 89.29 1.9 113.98 5.66C138.67 9.41 160.53 16.11 170.54 30.96C180.38 45.82 178.21 69 182.88 88.75Z",
    backgroundFrom:
      "M193.55 58.91C202.36 82.07 199.82 109.37 191.31 134.96C182.79 160.54 168.31 184.41 146.96 193.85C125.6 203.14 97.53 198.14 74.68 190.85C51.98 183.7 34.66 174.55 21.07 162.83C7.33 150.97 -2.67 136.67 3.15 124.38C8.97 112.09 30.63 101.94 32.57 82.21C34.36 62.49 16.59 33.33 19.58 19.03C22.41 4.88 45.86 5.6 70.05 4.6C94.39 3.45 119.33 0.74 142.03 8.74C164.58 16.89 184.74 35.76 193.55 58.91Z",
  },
];

const icons = [
  {
    ...shapes[0],
    yoyoEase: "sine",
    duration: 2.6,
    MainIcon: DesignIcon,
    color: blue,
    delay: 0,
  },
  {
    ...shapes[1],
    yoyoEase: "slow",
    duration: 2.3,
    color: deepPurple,
    delay: 0,
    MainIcon: CodeIcon,
  },
  {
    ...shapes[2],
    yoyoEase: "back",
    duration: 1.9,
    color: teal,
    delay: 0,
    MainIcon: MoneyIcon,
  },
  {
    ...shapes[1],
    yoyoEase: "slow",
    duration: 2.6,
    color: cyan,
    delay: -0.2,
    MainIcon: UserIcon,
  },
  {
    ...shapes[2],
    yoyoEase: "back",
    duration: 2.1,
    color: indigo,
    delay: -0.6,
    MainIcon: SEOIcon,
  },
  {
    ...shapes[0],
    yoyoEase: "sine",
    duration: 2.4,
    delay: -0.2,
    MainIcon: GraphIcon,
    color: green,
  },
];

const ServiceIcon: React.FC<{ index: number }> = ({ index }) => {
  const {
    backgroundTo,
    backgroundFrom,
    duration,
    yoyoEase,
    color,
    MainIcon,
    delay,
  } = icons[index];
  const pathRef = React.useRef(null);
  React.useEffect(() => {
    gsap.to(pathRef.current, {
      attr: {
        d: backgroundTo,
      },
      duration,
      repeat: -1,
      yoyo: true,
      yoyoEase,
      delay,
    });
  }, []);
  return (
    <div className="service-icon">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="background-svg"
      >
        <path fill={color[100]} d={backgroundFrom} ref={pathRef} />
      </svg>
      <MainIcon color={color} />
    </div>
  );
};

export default ServiceIcon;
