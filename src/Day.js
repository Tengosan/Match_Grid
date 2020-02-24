import React, { Component }from 'react';
import './Match.css';



class Day extends Component {
  render() {
    return (
      <div className="Day flex-container">
        <span className="day">{this.props.day}</span>
        <div className="rectangle-top"></div>
        <div className={this.props.linetop}></div>
        {this.props.children}
        <div className={this.props.linebot}></div>
        <div className="rectangle-bot"></div>
      </div>
    );
  }
}

export default Day;
