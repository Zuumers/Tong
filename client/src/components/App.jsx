import React from 'react';
import moment from 'moment';
import Calendars from './Calendars.jsx';
import Form from './Form.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
      firstMonth: moment(),
      secondMonth: moment().add(1, 'month'),
      selected: moment().startOf('day'),
      dateRange: [],
      checkin: undefined,
      checkout: undefined,
    }
    this.getPreviousMonths = this.getPreviousMonths.bind(this);
    this.getNextMonths = this.getNextMonths.bind(this);
    this.selectDates = this.selectDates.bind(this);
    this.clearDateRange = this.clearDateRange.bind(this);
    this.showDates = this.showDates.bind(this);
  }
  getPreviousMonths() {
    this.setState({
      firstMonth: this.state.firstMonth.subtract(1, 'month'),
      secondMonth: this.state.secondMonth.subtract(1, 'month')
    })
  }
  getNextMonths() {
    this.setState({
      firstMonth: this.state.firstMonth.add(1, 'month'),
      secondMonth: this.state.secondMonth.add(1, 'month')
    })
  }
  selectDates(date) {
    console.log(typeof date)
    // if dateRange < 2:
    if (this.state.dateRange.length < 2) {
      this.setState({
        dateRange: [...this.state.dateRange, date]
      })
    }
    // if dateRange > 2:
    if (this.state.dateRange.length === 2 || this.state.dateRange.length > 2) {
      this.clearDateRange()
    }
  }

  clearDateRange() {
    this.setState({
      dateRange: []
    })
  }
  showDates() {
    console.log(this.state.dateRange)
  }
  render() {
    return (
      <div>
        <Form />
        <Calendars
          // STATES:
          month={this.state.month}
          firstMonth={this.state.firstMonth}
          secondMonth={this.state.secondMonth}
          checkin={this.state.checkin}
          checkout={this.state.checkout}
          // FUNCTIONS:
          getPreviousMonths={this.getPreviousMonths}
          getNextMonths={this.getNextMonths}
          selectDates={this.selectDates}
        />
      </div>
    )
  }
}

export default App;