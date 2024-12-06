import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOChevronUpCircleOutline(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352 296L256 200 160 296"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
      />
    </svg>
  );
}
