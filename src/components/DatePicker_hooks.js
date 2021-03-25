import React, { useState, useEffect } from 'react';
import { getYear, eachYearOfInterval } from 'date-fns';



const DatePicker = ( { defaultYear, setPickedYear } ) => {
    const [ start, setStart ] = useState(0);
    const [ breakpoint, setBreakpoint ] = useState(25);
    const [ pickerDatesArray, setPickerDatesArray ] = useState('');
    const [ arraySlice, setArraySlice ] = useState('');
    const [ pickedDate, setPickedDate ] = useState('');
    const [ numberOfSlices, setNumberOfSlices ] = useState('');
    const [ currentSlice, setCurrentSlice ] = useState(1);
    const [ openPicker, setOpenPicker ] = useState(false);
    
   const onHandleYearPicker = () => {
    const interval = {
        start: new Date('1895'),
        end: new Date(),
      };
    const datesArray = eachYearOfInterval(interval);
    setPickerDatesArray(datesArray.reverse());
    setNumberOfSlices(Math.ceil(datesArray.length/25));
    setOpenPicker(true);
   }
   const pickDateHandler = (event) => {
    setPickedDate(event.target.innerText);
    setPickedYear(pickedDate);
    setOpenPicker(false);
   }
//    const nextHandler = () => {
//     setStart(start+25);
//     setBreakpoint(breakpoint+25);
//     setArraySlice(pickerDatesArray.slice(start, breakpoint));
//     setCurrentSlice(currentSlice+1);
//    };
//    const previousHandler = () => {
//     setStart(start-25);
//     setBreakpoint(breakpoint-25);
//     setArraySlice(pickerDatesArray.slice(start, breakpoint));
//     setCurrentSlice(currentSlice-1);
//    };
   useEffect(() => {
    setArraySlice(pickerDatesArray.slice(start, breakpoint));
   }, [ pickerDatesArray, breakpoint, start ]);
  //  useEffect(() => {
  //   setPickedYear(pickedDate);
  //  }, [ pickedDate, setPickedYear ]);
   useEffect(() => {
    setPickedDate(defaultYear || '');
   }, [ defaultYear ]);
   console.log(defaultYear)
    return ( 
<div className="year-picker">
      <input
        type="text"
        placeholder="Year"
        defaultValue={pickedDate}
        name="year"
        onChange={onHandleYearPicker}
        onClick={onHandleYearPicker}
      />
      <div className="year-picker-container">
     {/* {openPicker && <div 
          className={"previous " + 
          (currentSlice === 1 ? "hidden" : '') 
        }
          onClick={previousHandler}
          ></div>} */}
        <div className="year-picker-dates">
        {openPicker && arraySlice && arraySlice.map((year, key) => {
          return (
            // <span key={key} onClick={props.setPickedYear}>
            <span key={key} onClick={pickDateHandler}>
              {getYear(year)}
            </span>
          );
        })}
      </div>
        {/* {openPicker && <div 
        className={ "next " + (currentSlice===numberOfSlices ? "hidden" : '') }
        onClick={nextHandler}></div>} */}
      </div>
    </div>
    );
}
 
export default DatePicker;