import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function EJFEmoji005(props: IconProps) {
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
        d="M29.239 0C13.116 0 0 13.117 0 29.24C0 45.359 13.116 58.472 29.239 58.472C45.368 58.472 58.49 45.359 58.49 29.24C58.49 13.118 45.368 0 29.239 0ZM37.687 14.311C40.224 14.311 42.234 17.237 42.234 20.813C42.234 24.389 40.224 27.315 37.687 27.315C35.146 27.315 33.136 24.389 33.136 20.813C33.136 17.237 35.146 14.311 37.687 14.311ZM20.785 14.311C23.317 14.311 25.332 17.237 25.332 20.813C25.332 24.389 23.317 27.315 20.785 27.315C18.244 27.315 16.223 24.389 16.223 20.813C16.223 17.237 18.244 14.311 20.785 14.311ZM42.887 41.106H15.579V37.204H42.887V41.106Z"
        fill={fill}
      />
    </svg>
  );
}
