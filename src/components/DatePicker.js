import React from 'react';
import { getYear } from 'date-fns';

const DatePicker = (props) => {
  return (
    <div className="year-picker-container">
      <div>prev</div>
      <div className="year-picker">
        {props.dates.map((year, key) => {
          return (
            <span key={key} onClick={props.setPickedYear}>
              {getYear(year)}
            </span>
          );
        })}
      </div>
      <div>next</div>
    </div>
  );
};
export default DatePicker;
