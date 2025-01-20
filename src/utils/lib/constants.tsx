import Airplane from '@/components/core/svg/Airplane';
import Bed from '@/components/core/svg/Bed';
import { tHeaderArr } from '../types';

export const headerArr: tHeaderArr[] = [
  {
    slug: '/search-flights',
    title: 'find flight',
    icon: (fillColor?: string) => <Airplane fillColor={fillColor} />,
  },
  {
    slug: '/search-hotels',
    title: 'find stays',
    icon: (fillColor?: string) => <Bed fillColor={fillColor} />,
  },
];
