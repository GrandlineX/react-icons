import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOScaleOutline(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        width="416"
        height="416"
        x="48"
        y="48"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="96"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 00-3.06 48.08l33.32 39.21a26.07 26.07 0 0033.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0033.6-5.21L392 199.64a34.66 34.66 0 00-3.06-48.08z"
      />
    </svg>
  );
}
