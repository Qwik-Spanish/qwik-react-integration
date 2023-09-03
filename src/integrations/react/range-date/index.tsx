import { qwikify$ } from '@builder.io/qwik-react';

import RangeDatePicker from './react';
   
// Convertimos el componente React en un componente Qwik
export const QRangeDatePicker = qwikify$(RangeDatePicker, {eagerness: 'hover'});