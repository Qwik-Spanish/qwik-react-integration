import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Importamos el componente de React con el saludo adaptado a Qwik
import { QHelloCustomReact } from "~/integrations/react/custom-hello";

export const HelloCustomQwik = (props: { name: string }) => (
  <div>Hello {props.name} from Qwik</div>
);

export default component$(() => {
  return (
    <div class="section bright">
      <div class="container center">
        <h2>Saludo con React</h2>
        <QHelloCustomReact name="Anartz" />
        <h2>Saludo con Qwik</h2>
        <HelloCustomQwik name="Anartz" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
