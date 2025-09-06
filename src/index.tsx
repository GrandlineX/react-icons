import React from "react";
import { IONames, IOWrapper } from './io';
import { EJFNames, EJFWrapper } from './ejf';
import { SINames, SIWrapper } from './si';
import { IXNames, IXWrapper } from './ix';
import { IconProps } from "./IconProps";

export * from './io';
export * from './ejf';
export * from './si';
export * from './ix';

export enum ISize {
  'SL' = 16,
  'SM' = 24,
  'MD' = 32,
  'LG' = 64,
}
export type INames = IONames | SINames | EJFNames | IXNames;
const emptyFunc = (props: any) => {
  return null;
};
export const IWrapper = (x: INames) => {
  return (
    IOWrapper[x as IONames] ||
    EJFWrapper[x as EJFNames] ||
    SIWrapper[x as SINames] ||
    IXWrapper[x as IXNames] ||
    emptyFunc
  );
};

export const IWrapperFull = () => {
  return {
    ...IOWrapper,
    ...EJFWrapper,
    ...SIWrapper,
    ...IXWrapper,
  };
};


export function Icon({ name, size, width, height, className, stroke,fill }: IconProps & { name: INames }) {
    const Icon = IWrapper(name);
    return <Icon className={className} width={width} height={height} size={size} stroke={stroke} fill={fill} />;
}
