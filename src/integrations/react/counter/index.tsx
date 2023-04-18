/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

import { Counter } from "./react";

// Specify eagerness to hydrate component on hover event.
export const QCounter = qwikify$(Counter, { eagerness: 'hover' });
