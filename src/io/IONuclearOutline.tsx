import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IONuclearOutline(props: IconProps) {
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
        cy="256"
        r="192"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="256"
        cy="256"
        r="64"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M224 192L171 85"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M288 192L341 85"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M327.55 255.81L446.96 255.94"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M299.09 313.13L371.34 408.19"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M184.45 255.81L65.04 255.94"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M212.91 313.13L140.66 408.19"
      />
    </svg>
  );
}
