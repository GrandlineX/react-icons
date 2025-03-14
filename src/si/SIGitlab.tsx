import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SIGitlab(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-si-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M23.6 9.593l-.033-.086L20.3.98a.851.851 0 00-.336-.405.875.875 0 00-1 .054.875.875 0 00-.29.44L16.47 7.818H7.537L5.332 1.07a.857.857 0 00-.29-.441.875.875 0 00-1-.054.859.859 0 00-.336.405L.433 9.502l-.032.086a6.066 6.066 0 002.012 7.01l.01.009.03.021 4.977 3.727 2.462 1.863 1.5 1.132a1.008 1.008 0 001.22 0l1.499-1.132 2.461-1.863 5.006-3.75.013-.01a6.068 6.068 0 002.01-7.002z" />
    </svg>
  );
}
