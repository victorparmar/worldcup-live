import React, { Component } from "react";
import moment from "moment";
import "./App.css";

import packageJson from "./package.json.lnk";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InPlay from "./components/InPlay";

import EventService, { EventNames } from "./services/EventService";

const NextMatch = props => {
  return (
    <div>
      <b>{props.match.home}</b> vs <b>{props.match.away}</b> ({moment(props.match.date)
        .local()
        .format("DD MMM, HH:mm")})
    </div>
  );
};

const FinishedMatch = props => {
  return (
    <div>
      <b>
        {props.match.home} <u>{props.match.homeScore}</u>
      </b>{" "}
      -{" "}
      <b>
        {props.match.away} <u>{props.match.awayScore}</u>
      </b>{" "}
      ({moment(props.match.date)
        .local()
        .format("DD MMM, HH:mm")})
    </div>
  );
};

class App extends Component {
  state = {
    matchesInPlay: [],
    matchesFinished: [],
    matchesUpcoming: [],
    nextMatches: []
  };

  // for testing purposes
  toggleInPlay = () => {
    const newState = { ...this.state };

    if (this.state.matchesInPlay.length) {
      newState.matchesInPlay = [];
    } else {
      newState.matchesInPlay = [
        {
          id: "xxx",
          home: "Nigeria",
          homeScore: "0",
          away: "Croatia",
          awayScore: "2"
        }
        /*
        {
          id: "yyy",
          home: "Spain",
          homeScore: "2",
          away: "Germany",
          awayScore: "3"
        },
        */
      ];
    }

    this.setState(newState);
  };

  handleOnDataUpdate = e => {
    this.setState({
      matchesInPlay: e.matchesInPlay,
      matchesFinished: e.matchesFinished,
      matchesUpcoming: e.matchesUpcoming,
      nextMatches: e.nextMatches
    });
  };

  componentDidMount() {
    EventService.listenEvent(EventNames.ON_DATA_UPDATE, "app", this.handleOnDataUpdate);
  }

  componentWillUnmount() {
    EventService.unlistenEvent(EventNames.ON_DATA_UPDATE, "app");
  }

  render() {
    return (
      <div ref={elem => (this.appElem = elem)}>
        <section className={"hero is-fullheight " + (this.state.matchesInPlay.length ? "is-success" : "is-info")}>
          <div className="hero-head">
            <Navbar toggleInPlay={this.toggleInPlay} env={this.props.env} />
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
    if (this.state.matchesInPlay.length === 0) {
      return this.renderFinished();
    }

    return this.state.matchesInPlay.map(match => {
      return (
        <div key={match.id}>
          <InPlay home={match.home} homeScore={match.homeScore} away={match.away} awayScore={match.awayScore} />
          <hr />
        </div>
      );
    });
  }

  renderFinished() {
    if (!this.state.matchesFinished.length) {
      return;
    }

    return (
      <div className="columns match-list">
        <div className="column">
          <div className="match-deets">
            Finished <br />
            <FinishedMatch match={this.state.matchesFinished[this.state.matchesFinished.length - 1]} />
            {/*this.state.matchesFinished.map(match => {
              return <FinishedMatch key={match.id} match={match} />;
            })*/}
          </div>
        </div>
      </div>
    );
  }

  renderNextUp() {
    return (
      <div className="columns match-list">
        <div className="column">
          <div className="match-deets">
            Next up <br />
            {this.state.nextMatches.map(match => {
              return <NextMatch key={match.id} match={match} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
