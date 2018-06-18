import React from "react";

class InPlay extends React.Component {
  render() {
    if (this.props.time) {
      return this.renderWithTime();
    }
    return this.renderWithoutTime();
  }

  renderWithTime() {
    return (
      <div className="columns is-mobile">
        <div className="column is-5">
          <div className="country">{this.props.home}</div>
          <div className="score">{this.props.homeScore}</div>
        </div>
        <div className="column is-2 time-container">
          <div className="time">{this.props.time}</div>
        </div>
        <div className="column is-5">
          <div className="country">{this.props.away}</div>
          <div className="score">{this.props.awayScore}</div>
        </div>
      </div>
    );
  }

  renderWithoutTime() {
    return (
      <div className="columns is-mobile">
        <div className="column">
          <div className="country">{this.props.home}</div>
          <div className="score">{this.props.homeScore}</div>
        </div>
        <div className="column">
          <div className="country">{this.props.away}</div>
          <div className="score">{this.props.awayScore}</div>
        </div>
      </div>
    );
  }
}

export default InPlay;
