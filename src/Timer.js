import React from "react";
import moment from "moment-timezone";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.endDate = moment.tz(`${props.endDate}`, "Europe/Athens");

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      errorMsg: ""
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    this.calculateCountdown();
  }

  getTwoDigitValue = value => {
    if (value < 10) {
      return "0" + value;
    }
    return "" + value;
  };

  calculateCountdown = () => {
    const startDate = moment.tz("Europe/Athens");
    const { endDate } = this;
    // get diff (millis)
    const diff = endDate.diff(startDate);
    // get duration
    const duration = moment.duration(diff);
    // get parts of the duration
    const days = this.getTwoDigitValue(duration.days());
    const hours = this.getTwoDigitValue(duration.hours());
    const minutes = this.getTwoDigitValue(duration.minutes());
    const seconds = this.getTwoDigitValue(duration.seconds());

    this.setState(
      () => ({
        days,
        hours,
        minutes,
        seconds,
        diff
      }),
      () => {
        this.timer = setTimeout(this.calculateCountdown, 1000);
      }
    );
  };

  render() {
    const { days, hours, minutes, seconds, diff } = this.state;
    return diff > 0 ? (
      <div>
        <>My sweet Timer</>
        <div className="counter">
          <div className="time">
            <div className="time-value">{days}</div>
            <div className="time-label">Days</div>
          </div>
          <div className="time">
            <div className="time-value">{hours}</div>
            <div className="time-label">Hours</div>
          </div>
          <div className="time">
            <div className="time-value">{minutes}</div>
            <div className="time-label">Minutes</div>
          </div>
          <div className="time">
            <div className="time-value">{seconds}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="error-msg">
        Sorry! The Timer has expired, please give new date for new countdown!
      </div>
    );
  }
}
