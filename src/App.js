import React from "react";
import styled from "styled-components";

const PopupInner = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1fr;
  grid-template-rows: 1fr 1fr auto 1fr 1fr;
  left: 1%;
  right: 1%;
  top: 1%;
  bottom: 1%;
  margin: auto;
  border-radius: 20px;
  border: 1px solid green;
  background: black;
`;

const Time = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;

  display: block;
  padding: 5px 0px;
  margin: 4px;
  text-align: center;
  font-size: 40px;
  color: gold;
`;

class App extends React.Component {
  constructor() {
    super();

    let date = new Date();

    console.log(date.getHours() + " " + date.getMinutes());

    var delta =
      Math.abs(
        new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          0
        ) - new Date(2020, 2, 29, 21, 40, 0, 0)
      ) / 1000;

    console.log("delta: " + delta + " " + Date.now());

    this.state = {
      time: {},
      breakRemainingSeconds: delta
    };

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this.startTimer();
  }

  // Let's make some sense of JS date and time It can get a little bit tricky sometimes.
  // So, what we're doing here is taking the values and converting it in hours minutes, seconds.
  // In the example below we are using minutes and seconds, but just in case we got hours in there too :)

  createTime(secs) {
    let days = Math.floor(secs / (60 * 60 * 24));
    let divisor_for_hours = secs % (60 * 60 * 24);
    let hours = Math.floor(divisor_for_hours / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let timeObject = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds
    };
    return timeObject;
  }

  componentDidMount() {
    // Taking the starting point  -> breakRemainingSeconds <-
    // Passing it as the parameter and setting the state's time object to it.
    let timeLeft = this.createTime(this.state.breakRemainingSeconds);
    this.setState({ time: timeLeft });
  }

  // Check the current state and potentially (if != 0) start our main function
  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.breakRemainingSeconds + 1;
    this.setState({
      time: this.createTime(seconds),
      breakRemainingSeconds: seconds
    });

    // Check if we're at zero, and if so, clear the Interval
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <PopupInner>
          {/*<button onClick={this.startTimer} style={{ marginRight: "12px" }}>
          Let's Go
    </button>*/}
          <Time>
            Dana: {this.state.time.d} Sati: {this.state.time.h} Minuta:{" "}
            {this.state.time.m} Sekundi: {this.state.time.s}
          </Time>
        </PopupInner>
      </div>
    );
  }
}
export default App;
