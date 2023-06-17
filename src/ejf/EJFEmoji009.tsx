import React from 'react';
import { getIconProps, IconProps } from '../IconProps';

export default function EJFEmoji009(props: IconProps) {
  const { width, height, fill } = getIconProps(props);
  return (
    <svg
      className="glx--icon glx-ej-icon"
      stroke="currentColor"
      height={height}
      width={width}
      viewBox="0 0 59 59"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.239 0C13.116 0 0 13.117 0 29.24C0 45.359 13.116 58.472 29.239 58.472C45.362 58.472 58.479 45.359 58.479 29.24C58.479 13.118 45.362 0 29.239 0ZM38.921 14.854C42.824 14.854 45.429 17.459 46.716 20.379L44.448 22.01C43.477 20.059 41.515 18.428 38.921 18.428C36.327 18.428 34.702 19.731 33.395 22.01L31.117 20.379C32.424 17.459 35.019 14.854 38.921 14.854ZM19.419 14.854C23.321 14.854 25.916 17.459 27.214 20.379L24.936 22.01C23.965 20.059 22.014 18.428 19.419 18.428C16.814 18.428 15.179 19.731 13.882 22.01L11.614 20.379C12.912 17.459 15.506 14.854 19.419 14.854ZM29.165 46.801C18.375 46.801 9.66199 39.656 9.66199 30.791H48.678C48.678 39.657 39.966 46.801 29.165 46.801Z"
        fill={fill}
      />
    </svg>
  );
}
