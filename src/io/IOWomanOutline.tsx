import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOWomanOutline(props: IconProps) {
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
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368M183 274a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2"
      />
      <circle
        cx="256"
        cy="56"
        r="40"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M208 192L160 352 352 352 304 192"
      />
    </svg>
  );
}
