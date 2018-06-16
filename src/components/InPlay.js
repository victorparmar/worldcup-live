import React from "react";

class InPlay extends React.Component {
  render() {
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
