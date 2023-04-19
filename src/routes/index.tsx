import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QDayPickerReact } from "~/integrations/react/date-picker";
import dayPickerStyles from "./../../node_modules/react-day-picker/dist/style.css?inline";
export const DayPickerQwik = component$(() => {
  useStylesScoped$(dayPickerStyles);
  return <QDayPickerReact />;
});

export default component$(() => {
  return (
    <div class="section">
      <div class="container center">
        <h2>Trabajando con un paquete NPM</h2>
        <DayPickerQwik />
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
