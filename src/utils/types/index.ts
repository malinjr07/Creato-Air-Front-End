import { ReactNode } from 'react';

export type tHeaderArr = {
  title: string;
  slug: string;
  icon: (fillColor?: string) => ReactNode;
};
