import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// el componente de NPM ya convertido en Qwik
import { QDayPickerReact } from "~/integrations/react/date-picker";

// Estilos del componente que acabamos de incluir en el proyecto
import dayPickerStyles from "./../../node_modules/react-day-picker/dist/style.css?inline";
import reactModerDatePickerStyles from "./../../node_modules/react-modern-calendar-datepicker/lib/DatePicker.css?inline";

import { QRangeDatePicker } from "~/integrations/react/range-date";

// Combinamos los estilos y el componente de Qwik
export const DayPickerQwik = component$(() => {
  useStyles$(dayPickerStyles);
  return <QDayPickerReact />;
});

export default component$(() => {
  useStyles$(reactModerDatePickerStyles);
  const defaultFrom = {
    year: 2019,
    month: 3,
    day: 4,
  };

  const defaultTo = {
    year: 2019,
    month: 3,
    day: 7,
  };

  const defaultRange = useSignal({
    from: defaultFrom,
    to: defaultTo,
  });

  // Function to pass in React child component to update select range value
  const setRange = $((value: any) => {
    console.log('router/index.tsx', value)
    defaultRange.value = value;
  });



  return (
    <div class="section">
      <div class="container center">
        <h2>Trabajando con un paquete NPM - React Day Picker</h2>
        <DayPickerQwik />
        <br/>
        <h3>Rango de fechas</h3>
        <p>Desde:  {defaultRange.value.from.year} / {defaultRange.value.from.month} / {defaultRange.value.from.day}</p>
        <p>Hasta: {defaultRange.value.to.year} / {defaultRange.value.to.month} / {defaultRange.value.to.day}</p>
        <QRangeDatePicker defaultRange={defaultRange.value} setRange={setRange}/>
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
  /*useStyles$(`
    button.rdp-button_reset.rdp-button.rdp-day {
        background: #382f79;
    }
  `);*/
 