import React from 'react';

class DatePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pickedDate: this.props.defaultYear ? this.props.defaultYear : '',
        }
    };

    onChange = (e) => {
      console.log(e.target.value)
      this.setState({
        pickedDate: e.target.value
      });
  }
  componentDidUpdate(prevProps, prevState, snapshot){
      if(this.state.pickedDate !== this.props.defaultYear){
        this.setState({
            pickedDate: this.props.defaultYear
          })
      }
  }
  render() {

    return (
      <div className="year-picker">
        {/* <input
          type="text"
          placeholder="Year"
          value={this.state.pickedDate || ''}
          name="year"
          onChange={e => this.setState({ pickedDate: e.target.value })}
          onChange={this.onChange}
            onClick={onHandleYearPicker}
        /> */}
        <div className="year-picker-container">
            daty
          {/* {openPicker && <div 
          className={"previous " + 
          (currentSlice === 1 ? "hidden" : '') 
        }
          onClick={previousHandler}
          ></div>} */}
          {/* <div className="year-picker-dates">
            {openPicker &&
              arraySlice &&
              arraySlice.map((year, key) => {
                return (
                  // <span key={key} onClick={props.setPickedYear}>
                  <span key={key} onClick={pickDateHandler}>
                    {getYear(year)}
                  </span>
                );
              })}
          </div> */}
          {/* {openPicker && <div 
        className={ "next " + (currentSlice===numberOfSlices ? "hidden" : '') }
        onClick={nextHandler}></div>} */}
        </div>
      </div>
    );
  }
}

export default DatePicker;
