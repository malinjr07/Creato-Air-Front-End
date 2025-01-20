import { ReactNode } from 'react';

export type tChildrenProp = { children: ReactNode };

export type tRootLayoutProp = tChildrenProp & {};

export type tSvgIconProp = {
  fillColor?: string;
};

export type tBtnVariant = 'primary' | 'outlined' | 'open';
export type tBtnSize = 'large' | 'normal';

export type tButtonProps = {
  componentType?: 'link' | 'button';
  mainColor?: `#${string}`;
  textColor?: `text-[#${string}]`;
  variant?: tBtnVariant;
  size?: false extends tButtonProps['iconOnly']
    ? tBtnSize
    : undefined extends tButtonProps['iconOnly']
      ? tBtnSize
      : never;
  iconOnly?: boolean;
  title: false extends tButtonProps['iconOnly']
    ? string
    : undefined extends tButtonProps['iconOnly']
      ? string
      : never;
  iconPosition?: 'pre' | 'post';
  icon: true extends tButtonProps['iconOnly']
    ? ReactNode
    : 'pre' | 'post' extends tButtonProps['iconPosition']
      ? ReactNode
      : never;
  slug: 'link' extends tButtonProps['componentType'] ? string : never;
  onClickCb: 'button' extends tButtonProps['componentType']
    ? () => void
    : never;
};
