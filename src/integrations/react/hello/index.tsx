import { qwikify$ } from '@builder.io/qwik-react';

import {HelloReact} from './react';
   
// Convertimos el componente React en un componente Qwik
export const QHelloReact = qwikify$(HelloReact);