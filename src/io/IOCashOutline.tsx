import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCashOutline(props: IconProps) {
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
        width="448"
        height="256"
        x="32"
        y="80"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="16"
        ry="16"
        transform="rotate(180 256 208)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 384L448 384"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M96 432L416 432"
      />
      <circle
        cx="256"
        cy="208"
        r="80"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80"
      />
    </svg>
  );
}
