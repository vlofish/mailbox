import { MUIButtonCompInterface } from '../interfaces';

enum MUIButtonSizeEnum {
  SMALL= 'small',
}

enum MUIButtonColorEnum {
  INHERIT = 'inherit', 
  PRIMARY = 'primary', 
  SECONDARY = 'secondary', 
  SUCCESS = 'success', 
  ERROR = 'error', 
  INFO = 'info', 
  WARNING = 'warning',
}

enum MUIButtonVariantEnum {
  OUTLINED = 'outlined',
  CONTAINED= 'contained',
}

export const MUI_PRIMARY_BUTTON: MUIButtonCompInterface = {
  size: MUIButtonSizeEnum.SMALL,
  color: MUIButtonColorEnum.PRIMARY,
  variant: MUIButtonVariantEnum.OUTLINED,
}

export const MUI_SECONDARY_BUTTON: MUIButtonCompInterface = {
  size: MUIButtonSizeEnum.SMALL,
  color: MUIButtonColorEnum.SECONDARY,
  variant: MUIButtonVariantEnum.OUTLINED,
}

export const MUI_SUCCESS_BUTTON: MUIButtonCompInterface = {
  size: MUIButtonSizeEnum.SMALL,
  color: MUIButtonColorEnum.SUCCESS,
  variant: MUIButtonVariantEnum.OUTLINED,
}

export const MUI_ERROR_BUTTON: MUIButtonCompInterface = {
  size: MUIButtonSizeEnum.SMALL,
  color: MUIButtonColorEnum.ERROR,
  variant: MUIButtonVariantEnum.OUTLINED,
}

export const MUI_INFO_BUTTON: MUIButtonCompInterface = {
  size: MUIButtonSizeEnum.SMALL,
  color: MUIButtonColorEnum.INFO,
  variant: MUIButtonVariantEnum.OUTLINED,
}


export const MUI_WARNING_BUTTON: MUIButtonCompInterface = {
  size: MUIButtonSizeEnum.SMALL,
  color: MUIButtonColorEnum.WARNING,
  variant: MUIButtonVariantEnum.CONTAINED,
}
