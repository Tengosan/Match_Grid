import React, { Component } from 'react';
import './Match.css';


class Match extends Component {
  render() {
    return (
      <div className="Match flex-container">
        {this.props.children}
        <div className="line-top"></div>
        <div className="team-1">
          <span className="team-1-country">{this.props.country1}</span>
          <img className="team-1-icon" alt="team-1-icon"
            src={this.props.img1}
            width="50"
            height="50" />
        </div>
        <div className="line-bot"></div>
        <div className="time">{this.props.matchtime}</div>
        <div className="team-2">
          <img className="team-2-icon" alt="team-2-icon"
            src={this.props.img2}
            width="50"
            height="50" />
          <span className="team-2-country">{this.props.country2}</span>
        </div>
        <div className="winner">
          <img className="winner-icon" alt="winner-icon"
            src={this.props.winner}
            width="50"
            height="50" />
        </div>
      </div>
    )
  }
}

export default Match;
