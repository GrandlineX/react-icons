import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SIIntellijidea(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-si-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 01-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 01-1.279-1.056l1.39-1.555a3.2 3.2 0 00.833.722c.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z" />
    </svg>
  );
}
