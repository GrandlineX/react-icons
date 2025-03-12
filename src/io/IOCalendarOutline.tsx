import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCalendarOutline(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        width="416"
        height="384"
        x="48"
        y="80"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
      />
      <circle cx="296" cy="232" r="24" />
      <circle cx="376" cy="232" r="24" />
      <circle cx="296" cy="312" r="24" />
      <circle cx="376" cy="312" r="24" />
      <circle cx="136" cy="312" r="24" />
      <circle cx="216" cy="312" r="24" />
      <circle cx="136" cy="392" r="24" />
      <circle cx="216" cy="392" r="24" />
      <circle cx="296" cy="392" r="24" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M128 48L128 80"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M384 48L384 80"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M464 160L48 160"
      />
    </svg>
  );
}
