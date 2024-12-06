import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function EJFEmoji006(props: IconProps) {
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
        d="M29.251 0C13.122 0 0 13.117 0 29.24C0 45.359 13.122 58.472 29.251 58.472C45.374 58.472 58.49 45.359 58.49 29.24C58.49 13.118 45.374 0 29.251 0ZM16.288 21.077C16.288 17.501 18.302 14.569 20.844 14.569C23.386 14.569 25.391 17.501 25.391 21.077C25.391 24.653 23.386 27.585 20.844 27.585C18.302 27.585 16.288 24.653 16.288 21.077ZM40.472 37.498C38.743 41.307 34.144 42.662 30.41 42.662L22.52 42.656V38.242L30.41 38.248C32.034 38.248 35.82 38.248 37.962 35.975L38.468 35.416L40.884 36.57L40.472 37.498ZM37.752 27.584C35.221 27.584 33.195 24.652 33.195 21.076C33.195 17.5 35.22 14.568 37.752 14.568C40.294 14.568 42.309 17.5 42.309 21.076C42.309 24.652 40.294 27.584 37.752 27.584Z"
        fill={fill}
      />
    </svg>
  );
}
