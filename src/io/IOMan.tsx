import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOMan(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle cx="256" cy="56" r="56" />
      <path d="M304 128h-96a64.19 64.19 0 00-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00184 300v-99.73a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8V489a23 23 0 0023 23 23 23 0 0023-23V346.34a10.24 10.24 0 019.33-10.34A10 10 0 01266 346v143a23 23 0 0023 23 23 23 0 0023-23V200.27a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00368 300V192a64.19 64.19 0 00-64-64z" />
    </svg>
  );
}
