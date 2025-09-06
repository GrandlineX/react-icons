import { lazy } from "react";

const EJFEmoji001 = lazy(()=>import("./EJFEmoji001"));
const EJFEmoji002 = lazy(()=>import("./EJFEmoji002"));
const EJFEmoji003 = lazy(()=>import("./EJFEmoji003"));
const EJFEmoji004 = lazy(()=>import("./EJFEmoji004"));
const EJFEmoji005 = lazy(()=>import("./EJFEmoji005"));
const EJFEmoji006 = lazy(()=>import("./EJFEmoji006"));
const EJFEmoji007 = lazy(()=>import("./EJFEmoji007"));
const EJFEmoji008 = lazy(()=>import("./EJFEmoji008"));
const EJFEmoji009 = lazy(()=>import("./EJFEmoji009"));
const EJFEmoji010 = lazy(()=>import("./EJFEmoji010"));

export const EJFWrapper = {
  EJFEmoji001,
  EJFEmoji002,
  EJFEmoji003,
  EJFEmoji004,
  EJFEmoji005,
  EJFEmoji006,
  EJFEmoji007,
  EJFEmoji008,
  EJFEmoji009,
  EJFEmoji010,
};

export type EJFNames =
  | 'EJFEmoji001'
  | 'EJFEmoji002'
  | 'EJFEmoji003'
  | 'EJFEmoji004'
  | 'EJFEmoji005'
  | 'EJFEmoji006'
  | 'EJFEmoji007'
  | 'EJFEmoji008'
  | 'EJFEmoji009'
  | 'EJFEmoji010';

export {
  EJFEmoji001,
  EJFEmoji002,
  EJFEmoji003,
  EJFEmoji004,
  EJFEmoji005,
  EJFEmoji006,
  EJFEmoji007,
  EJFEmoji008,
  EJFEmoji009,
  EJFEmoji010,
};
