/** @jsxImportSource react */
import React, { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

const RangeDatePicker = (props: {defaultRange: any, setRange: any}) => {
  
  const changeValue = (value: any) => {
    console.log('change', value);
    // To set value in component to view in app
    setSelectedDayRange(value);
    // update qwik route component principal info
    props.setRange(value);
  }

  const [selectedDayRange, setSelectedDayRange] = useState(props.defaultRange);
  return (
    <Calendar
      value={selectedDayRange}
      onChange={(value) => changeValue(value)}
      shouldHighlightWeekends
    />
  );
};

export default RangeDatePicker;
