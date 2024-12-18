import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function EJFEmoji007(props: IconProps) {
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
        d="M29.24 0C13.117 0 0 13.117 0 29.24C0 45.359 13.117 58.472 29.24 58.472C45.363 58.472 58.48 45.359 58.48 29.24C58.48 13.118 45.363 0 29.24 0ZM37.741 14.569C40.273 14.569 42.287 17.501 42.287 21.077C42.287 24.653 40.273 27.585 37.741 27.585C35.199 27.585 33.184 24.653 33.184 21.077C33.184 17.501 35.199 14.569 37.741 14.569ZM20.834 14.569C23.376 14.569 25.38 17.501 25.38 21.077C25.38 24.653 23.376 27.585 20.834 27.585C18.303 27.585 16.277 24.653 16.277 21.077C16.277 17.501 18.303 14.569 20.834 14.569ZM29.282 45.139C21.488 45.139 14.337 40.584 11.077 33.432L12.712 32.135C17.585 37.33 22.131 39.936 29.282 39.936C36.433 39.936 40.99 37.331 45.874 32.135L47.498 33.432C44.238 40.584 37.088 45.139 29.282 45.139Z"
        fill={fill}
      />
    </svg>
  );
}
