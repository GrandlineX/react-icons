import {lazy} from "react";

const IXMinimize = lazy(()=>import('./IXMinimize')) ;


export const IXWrapper = {
  IXMinimize,
};

export type IXNames = 'IXMinimize';

export { IXMinimize };
