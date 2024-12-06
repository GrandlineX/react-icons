import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function EJFEmoji003(props: IconProps) {
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
        d="M29.243 0C13.118 0 0 13.117 0 29.24C0 45.359 13.118 58.472 29.243 58.472C45.369 58.472 58.488 45.359 58.488 29.24C58.489 13.118 45.369 0 29.243 0ZM37.687 14.789C40.218 14.789 42.238 17.717 42.238 21.297C42.238 24.867 40.218 27.795 37.687 27.795C35.145 27.795 33.135 24.867 33.135 21.297C33.135 17.717 35.145 14.789 37.687 14.789ZM20.771 14.789C23.313 14.789 25.333 17.717 25.333 21.297C25.333 24.867 23.313 27.795 20.771 27.795C18.24 27.795 16.225 24.867 16.225 21.297C16.225 17.717 18.24 14.789 20.771 14.789ZM44.511 44.707C39.954 40.156 34.759 38.853 29.233 38.853C23.706 38.853 18.501 40.156 13.95 44.707L12.323 43.404C16.225 36.254 23.374 33.654 29.233 33.654C35.087 33.654 42.238 36.254 46.14 43.404L44.511 44.707Z"
        fill={fill}
      />
    </svg>
  );
}
