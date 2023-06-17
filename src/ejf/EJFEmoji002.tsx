import React from 'react';
import { getIconProps, IconProps } from '../IconProps';

export default function EJFEmoji002(props: IconProps) {
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
        d="M29.245 0C13.119 0 0 13.117 0 29.24C0 45.359 13.119 58.472 29.245 58.472C45.368 58.472 58.485 45.359 58.485 29.24C58.485 13.118 45.368 0 29.245 0ZM12.467 16.862L13.767 14.591L26.775 20.445V23.045L13.767 28.899L12.467 26.622L21.572 21.743L12.467 16.862ZM44.655 45.151C40.106 40.606 34.901 39.303 29.374 39.303C23.848 39.303 18.645 40.606 14.094 45.151L12.467 43.854C16.372 36.704 23.524 34.102 29.374 34.102C35.228 34.102 42.382 36.704 46.282 43.854L44.655 45.151ZM46.282 26.62L44.982 28.897L31.974 23.043V20.443L44.982 14.589L46.282 16.86L37.177 21.739L46.282 26.62Z"
        fill={fill}
      />
    </svg>
  );
}
