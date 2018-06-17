import React, { Component } from "react";
import "./App.css";

import packageJson from "./package.json.lnk";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InPlay from "./components/InPlay";

import NotificationService from "./services/NotificationService";
import EventService, { EventNames } from "./services/EventService";

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
  /*
  {
    home: "Spain",
    homeScore: "2",
    away: "Germany",
    awayScore: "3"
  },
  */
];

class App extends Component {
  state = {
    inPlayTeams: inPlayTeams
  };

  // for testing purposes
  toggleInPlay = () => {
    const newState = { ...this.state };

    if (this.state.inPlayTeams.length) {
      newState.inPlayTeams = [];
    } else {
      newState.inPlayTeams = inPlayTeams;
    }

    this.setState(newState);
    NotificationService.notify("woah!");
  };

  handleOnDataUpdate = e => {
    console.log(e);
  };

  componentDidMount() {
    EventService.listenEvent(
      EventNames.ON_DATA_UPDATE,
      "app",
      this.handleOnDataUpdate
    );
  }

  componentWillUnmount() {
    EventService.unlistenEvent(EventNames.ON_DATA_UPDATE, "app");
  }

  render() {
    return (
      <div ref={elem => (this.appElem = elem)}>
        <section
          className={
            "hero is-fullheight " +
            (this.state.inPlayTeams.length ? "is-success" : "is-info")
          }
        >
          <div className="hero-head">
            <Navbar toggleInPlay={this.toggleInPlay} />
          </div>

          <div className="hero-body">
            <div className="container wc-dashboard has-text-centered">
              {this.renderInPlay()}
              {this.renderNextUp()}
            </div>
          </div>

          <div className="hero-foot">
            <Footer version={packageJson.version} />
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
        <div key={key}>
          <InPlay
            home={team.home}
            homeScore={team.homeScore}
            away={team.away}
            awayScore={team.awayScore}
          />
          <hr />
        </div>
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
