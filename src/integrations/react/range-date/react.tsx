/** @jsxImportSource react */
import React, { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import {RangeDateProps } from '~/models/datepicker';

const RangeDatePicker = (props: {defaultRange: RangeDateProps, setRange: any}) => {
  
  const changeValue = (value: {
    from: {year: number, month: number, day: number},
    to: {year: number, month: number, day: number}
  }) => {
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
      onChange={(value: {
        from: {year: number, month: number, day: number},
        to: {year: number, month: number, day: number}
      }) => changeValue(value)}
      shouldHighlightWeekends
    />
  );
};

export default RangeDatePicker;
