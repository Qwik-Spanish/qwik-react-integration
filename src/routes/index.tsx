import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QCounter } from "~/integrations/react/counter";

export default component$(() => {
  return (
    <div class="section">
      <div class="container center">
        <h2>Contador</h2>
        <QCounter />
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
