// =======================================
import { MouseEventHandler } from "react";
// =======================================

export interface ButtonCompInterface {
  mui: MUIButtonCompInterface;
  text?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface MUIButtonCompInterface {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
}