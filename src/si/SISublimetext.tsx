import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SISublimetext(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-si-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M20.953.004a.397.397 0 00-.18.017L3.225 5.585c-.175.055-.323.214-.402.398a.42.42 0 00-.06.22v5.726a.42.42 0 00.06.22c.079.183.227.341.402.397l7.454 2.364-7.454 2.363c-.255.08-.463.374-.463.655v5.688c0 .282.208.444.463.363l17.55-5.565c.237-.075.426-.336.452-.6.003-.022.013-.04.013-.065V12.06c0-.281-.208-.575-.463-.656L13.4 9.065l7.375-2.339c.255-.08.462-.375.462-.656V.384c0-.211-.117-.355-.283-.38z" />
    </svg>
  );
}
