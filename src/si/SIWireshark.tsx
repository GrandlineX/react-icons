import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SIWireshark(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-si-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M2.95 0C1.33 0 0 1.32 0 2.95v18.1C0 22.68 1.32 24 2.95 24h18.1c1.62 0 2.95-1.32 2.95-2.95V2.95A2.95 2.95 0 0021.05 0zm0 1.09h18.1c1.04 0 1.85.818 1.85 1.86v14h-5.27c-.335-.796-2.57-6.47.283-10.9a.516.517 0 00-.443-.794c-5.24.083-8.2 3.19-9.74 6.21-1.35 2.64-1.63 4.91-1.69 5.53H1.09v-14c0-1.04.817-1.86 1.85-1.86zm13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 00.469.301h5.62v3.05a1.84 1.84 0 01-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 00.514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z" />
    </svg>
  );
}
