import React from 'react';
import { getYear } from 'date-fns';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerDatesArray: this.props.pickerDatesArray,
      currentSlice: 1,
      numberOfSlices: 6,
      arraySlice: this.props.pickerDatesArray.slice(0, 25),
      datesStart: 0,
      breakpoint: 25,
    };
  }

  onChange = (e) => {
    this.setState({
      pickedDate: e.target.value,
    });
  };

  previousHandler = () => {
    console.log('previousHandler');
    // setStart(start-25);
    // setBreakpoint(breakpoint-25);
    // setArraySlice(pickerDatesArray.slice(start, breakpoint));
    // setCurrentSlice(currentSlice-1);
  };

  nextHandler = () => {
    console.log('nextHandler');
    //     setStart(start+25);
    //     setBreakpoint(breakpoint+25);
    //     setArraySlice(pickerDatesArray.slice(start, breakpoint));
    //     setCurrentSlice(currentSlice+1);
  };

  componentDidMount() {
    // componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, 'prevState');
    // if (prevState.arraySlice.length === 0) {
    //   this.setState({
    //     arraySlice: this.state.pickerDatesArray.slice(this.datesStart, this.breakpoint)
    //   })
    // }
  }

  render() {
    return (
        <div className="year-picker-container">
          <div
            className={
              'previous ' + (this.state.currentSlice === 1 ? 'hidden' : '')
            }
            onClick={this.previousHandler}
          ></div>
          <div className="year-picker-dates">
            {this.state.arraySlice &&
              this.state.arraySlice.map((year, key) => {
                return (
                  // <span key={key} onClick={props.setPickedYear}>
                  <span key={key} onClick={this.props.setPickedYear}>
                    {getYear(year)}
                  </span>
                );
              })}
          </div>
          <div
            className={
              'next ' +
              (this.state.currentSlice === this.state.numberOfSlices
                ? 'hidden'
                : '')
            }
            onClick={this.nextHandler}
          ></div>
        </div>
    );
  }
}

export default DatePicker;
