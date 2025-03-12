import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOEllipsisVerticalOutline(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="256"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="256"
        cy="416"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="256"
        cy="96"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </svg>
  );
}
