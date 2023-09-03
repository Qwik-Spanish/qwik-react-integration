/** @jsxImportSource react */
import React, { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

const RangeDatePicker = (props: {defaultFrom: any, defaultTo: any}) => {
  

  const defaultRange = {
    from: props.defaultFrom,
    to: props.defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
  return (
    <Calendar
      value={selectedDayRange}
      onChange={(value) => setSelectedDayRange(value)}
      shouldHighlightWeekends
    />
  );
};

export default RangeDatePicker;
