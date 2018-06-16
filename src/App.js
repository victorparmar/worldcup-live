import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InPlay from "./components/InPlay";

import NotificationService from "./services/NotificationService";

const NextMatch = props => {
  return (
    <div>
      <b>{props.home}</b> vs <b>{props.away}</b> ({props.time})
    </div>
  );
};

const inPlayTeams = [
  {
    home: "Nigeria",
    homeScore: "0",
    away: "Croatia",
    awayScore: "2"
  }
];

class App extends Component {
  state = {
    inPlayTeams: inPlayTeams
  };

  handleInPlayToggleClick = e => {
    e.preventDefault();

    const newState = { ...this.state };

    if (this.state.inPlayTeams.length) {
      newState.inPlayTeams = [];
    } else {
      newState.inPlayTeams = inPlayTeams;
    }

    this.setState(newState);
    NotificationService.notify("woah!");
  };

  render() {
    return (
      <div>
        <section
          className={
            "hero is-fullheight " +
            (this.state.inPlayTeams.length ? "is-success" : "is-info")
          }
        >
          <div className="hero-head">
            <Navbar />
          </div>

          <div className="hero-body">
            <div className="container wc-dashboard has-text-centered">

              <div className="columns">
                <div className="column">
                  <a className="button" onClick={this.handleInPlayToggleClick}>
                    <span>Toggle InPlay</span>
                  </a>
                </div>
              </div>

              {this.renderInPlay()}
              {this.renderNextUp()}
            </div>
          </div>

          <div className="hero-foot">
            <Footer />
          </div>
        </section>
      </div>
    );
  }

  renderInPlay() {
    if (this.state.inPlayTeams.length === 0) {
      return;
    }

    return this.state.inPlayTeams.map(team => {
      const key = team.home + "-" + team.away;
      return (
        <InPlay
          key={key}
          home={team.home}
          homeScore={team.homeScore}
          away={team.away}
          awayScore={team.awayScore}
        />
      );
    });
  }

  renderNextUp() {
    return (
      <div className="columns next-up">
        <div className="column">
          <div className="next-match">
            Next up <br />
            <NextMatch home="Spain" away="Russia" time="time" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
