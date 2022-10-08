import React from 'react';

export default function IXMinimize(props: { width?: number; height?: number }) {
  const { width, height } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M6 19h12v2H6v-2z" />
    </svg>
  );
}
