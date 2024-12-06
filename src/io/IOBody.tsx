import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBody(props: IconProps) {
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
      <path d="M437 128H75a27 27 0 000 54h101.88c6.91 0 15 3.09 19.58 15 5.35 13.83 2.73 40.54-.57 61.23l-4.32 24.45a.42.42 0 01-.12.35l-34.6 196.81A27.43 27.43 0 00179 511.58a27.06 27.06 0 0031.42-22.29l23.91-136.8S242 320 256 320c14.23 0 21.74 32.49 21.74 32.49l23.91 136.92a27.24 27.24 0 1053.62-9.6L320.66 283a.45.45 0 00-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23 4.56-11.88 12.91-15 19.28-15H437a27 27 0 000-54z" />
    </svg>
  );
}
