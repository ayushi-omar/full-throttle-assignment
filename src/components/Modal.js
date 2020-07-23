import React, { Component } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const activityDetail = this.props.activity_periods.map((item) => {
      let dateArray = item.start_time.split(" ");
      let date = moment()
        .month(dateArray[0])
        .date(dateArray[1])
        .year(dateArray[2]);

      return (
        <div className="card item" key={item.start_time}>
          <Calendar value={new Date(date)} />
        </div>
      );
    });
    return (
      <div>
        {this.props.show ? (
          <div className="Backdrop" onClick={this.props.clicked}></div>
        ) : null}
        <div
          className="ActivityModal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            backgroundColor: "#c7d2e0",
          }}
        >
          <div className="myCard">
            <h2>Activity</h2>
            <div className="card activity">
              {activityDetail ? (
                activityDetail
              ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  No Activity Found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
