import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOKeypadOutline(props: IconProps) {
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
        cy="448"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="256"
        cy="320"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M288 192a32 32 0 11-32-32 32 32 0 0132 32z"
      />
      <circle
        cx="256"
        cy="64"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="384"
        cy="320"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="384"
        cy="192"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="384"
        cy="64"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="128"
        cy="320"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="128"
        cy="192"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="128"
        cy="64"
        r="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </svg>
  );
}
