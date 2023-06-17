import {IONames,IOWrapper} from "./io";
import {EJFNames,EJFWrapper} from "./ejf";
import {EJONames,EJOWrapper} from "./ejo";
import {SINames,SIWrapper} from "./si";
import {IXNames,IXWrapper} from "./ix";

export * from "./io";
export * from "./ejf";
export * from "./ejo";
export * from "./si";
export * from "./ix";

export enum ISize {
  'SL' = 16,
  'SM' = 24,
  'MD' = 32,
  'LG' = 64,
}
export type INames = IONames | EJFNames | EJONames | SINames | IXNames;
const emptyFunc=(props:any)=>{
  return  null;
};
export const IWrapper=(x:INames) => {
  return IOWrapper[x as IONames] || EJFWrapper[x as EJFNames] || EJOWrapper[x as EJONames] || SIWrapper[x as SINames] || IXWrapper[x as IXNames] || emptyFunc;
};

export const IWrapperFull=() => {
  return {
    ...IOWrapper,
    ...EJFWrapper,
    ...EJOWrapper,
    ...SIWrapper,
    ...IXWrapper
  }
};

export function getIcon(name: INames) {
  return  IWrapper(name)
}

