/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';

// Creamos componente React
function Greetings() {
    return<div>Hello from React</div>;
}
   
 
// Convertimos el componente React en un componente Qwik
export const QHelloReact = qwikify$(Greetings);