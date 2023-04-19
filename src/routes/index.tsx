import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QButton, QDisplay } from "~/integrations/react/button-display";

export default component$(() => {
  console.log('Qwik Render');
  const count = useSignal(0);
  return (
    <div class="section">
      <div class="container center">
        <h2>Comunicación con dos componentes de React</h2>
          <QButton
          onClick$={() => {
            console.log('click', count.value);
            count.value++;
          }}
        />
        <QDisplay count={count.value} />
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