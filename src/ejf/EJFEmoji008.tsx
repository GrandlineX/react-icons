import React from 'react';
import { getIconProps, IconProps } from '../IconProps';

export default function EJFEmoji008(props: IconProps) {
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
        d="M29.24 0C13.117 0 0 13.117 0 29.24C0 45.359 13.117 58.472 29.24 58.472C45.363 58.472 58.479 45.359 58.479 29.24C58.479 13.118 45.363 0 29.24 0ZM17.836 43.211C13.241 40.58 10.275 37.078 10.275 32.354H17.836V43.211ZM13.893 21.641L11.615 20.016C12.923 17.084 15.517 14.485 19.43 14.485C23.323 14.485 25.927 17.085 27.214 20.016L24.946 21.641C23.975 19.684 22.024 18.059 19.429 18.059C16.825 18.059 15.19 19.362 13.893 21.641ZM28.228 46.086C25.141 45.979 22.237 45.311 19.732 44.176V32.354H28.228V46.086ZM38.622 44.176C36.105 45.311 33.201 45.979 30.114 46.086V32.354H38.622V44.176ZM33.406 21.641L31.128 20.016C32.436 17.084 35.03 14.485 38.933 14.485C42.826 14.485 45.441 17.085 46.728 20.016L44.45 21.641C43.48 19.684 41.528 18.059 38.933 18.059C36.328 18.059 34.703 19.362 33.406 21.641ZM40.507 43.211V32.354H48.068C48.067 37.079 45.114 40.581 40.507 43.211Z"
        fill={fill}
      />
    </svg>
  );
}