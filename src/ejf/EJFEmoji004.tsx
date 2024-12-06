import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function EJFEmoji004(props: IconProps) {
  const { width, height, fill, className } = useIconProps(props);
  return (
    <svg
      className={`glx--icon glx-ej-icon${className}`}
      stroke="currentColor"
      height={height}
      width={width}
      viewBox="0 0 59 59"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.24 0C13.117 0 0 13.117 0 29.24C0 45.359 13.117 58.472 29.24 58.472C45.363 58.472 58.48 45.359 58.48 29.24C58.48 13.118 45.363 0 29.24 0ZM21.029 14.311C23.571 14.311 25.58 17.237 25.58 20.813C25.58 24.389 23.571 27.315 21.029 27.315C18.492 27.315 16.483 24.389 16.483 20.813C16.483 17.237 18.492 14.311 21.029 14.311ZM38.327 45.873L13.419 34.629L15.049 31.049L39.894 42.297L38.327 45.873ZM37.931 27.315C35.4 27.315 33.385 24.389 33.385 20.813C33.385 17.237 35.4 14.311 37.931 14.311C40.473 14.311 42.498 17.237 42.498 20.813C42.498 24.389 40.473 27.315 37.931 27.315Z"
        fill={fill}
      />
    </svg>
  );
}
