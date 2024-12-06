import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOColorFilterOutline(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="184"
        r="120"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="344"
        cy="328"
        r="120"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="168"
        cy="328"
        r="120"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}
