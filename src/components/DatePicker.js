import React, { useState, useEffect } from 'react';
import { getYear } from 'date-fns';


const DatePicker = (props) => {
  const [ breakpoint, setBreakpoint] = useState(25);
  const [ arraySlice, setArraySlice ] = useState(props.dates.slice(0, breakpoint));

  return (

    <div className="year-picker-container">
      <div>prev</div>
      <div className="year-picker">
        {arraySlice.map((year, key) => {
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
