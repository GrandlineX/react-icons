import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOApps(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z" />
    </svg>
  );
}
