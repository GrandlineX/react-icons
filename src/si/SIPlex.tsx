import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SIPlex(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-si-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12" />
    </svg>
  );
}
