// =======================================
import { MouseEventHandler } from "react";
// =======================================

export interface ButtonCompInterface {
  text?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}