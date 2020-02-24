import React, { Component }from 'react';
import './Match.css';
import './Day.css';



class Stage extends Component {
  render() {
    return (
      <div className={this.props.stagenumber}>
        {this.props.stage}
        {this.props.children}
      </div>
    );
  }
}

export default Stage;
