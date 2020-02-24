import React, { Component }from 'react';
import './Match.css';
import Day from './Day';
import './Day.css';
import Match from './Match';
import './Tournament.css';
import Stage from './Stage';
import './Stage.css';
import data from  './Tournament.json';

class Tournament extends Component {
  render() {
    return (
      <div className="Tournament flex-container">
        <Stage
          stagenumber="Stage1 flex-container"
          stage={data.TOURNAMENT.Stage.Title[0]}
        >
          <Day day={data.TOURNAMENT.Day.Title[0]}
            linetop ="vertical-line-top"
            linebot="vertical-line-bot"
          >
            <Match
              country1={data.TOURNAMENT.Matches.Countries[0]}
              country2={data.TOURNAMENT.Matches.Countries[1]}
              matchtime={data.TOURNAMENT.Matches.Time[0]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Japan-Flag-icon.png"
              img2="https://cdn3.iconfinder.com/data/icons/finalflags/256/China-Flag.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Japan-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line"></div>
            <div className="winner-line-1"></div>
            <div className="horizontal-line-1"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[2]}
              country2={data.TOURNAMENT.Matches.Countries[3]}
              matchtime={data.TOURNAMENT.Matches.Time[1]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Singapore-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[4]}
              country2={data.TOURNAMENT.Matches.Countries[5]}
              matchtime={data.TOURNAMENT.Matches.Time[2]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/Germany-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/United-States-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/United-States-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line"></div>
            <div className="winner-line-2"></div>
            <div className="horizontal-line-2"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[6]}
              country2={data.TOURNAMENT.Matches.Countries[7]}
              matchtime={data.TOURNAMENT.Matches.Time[3]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Australia-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Russia-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Russia-Flag-icon.png"
            ></Match>

          </Day>
          <Day day={data.TOURNAMENT.Day.Title[1]}
            linetop ="vertical-line-top"
            linebot="vertical-line-bot"
          >
            <Match
              country1={data.TOURNAMENT.Matches.Countries[8]}
              country2={data.TOURNAMENT.Matches.Countries[9]}
              matchtime={data.TOURNAMENT.Matches.Time[0]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/Austria-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/Italy-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/Austria-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line"></div>
            <div className="winner-line-1"></div>
            <div className="horizontal-line-1"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[10]}
              country2={data.TOURNAMENT.Matches.Countries[11]}
              matchtime={data.TOURNAMENT.Matches.Time[1]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Turkey-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Spain-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Spain-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[12]}
              country2={data.TOURNAMENT.Matches.Countries[13]}
              matchtime={data.TOURNAMENT.Matches.Time[2]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/France-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line"></div>
            <div className="winner-line-2"></div>
            <div className="horizontal-line-2"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[14]}
              country2={data.TOURNAMENT.Matches.Countries[15]}
              matchtime={data.TOURNAMENT.Matches.Time[3]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Netherlands-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Poland-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Netherlands-Flag-icon.png"
            ></Match>
          </Day>
        </Stage>

        <Stage
          stagenumber="Stage2 flex-container"
          stage={data.TOURNAMENT.Stage.Title[1]}
        >
          <Day day={data.TOURNAMENT.Day.Title[2]}
            linetop ="vertical-line-top-2"
            linebot="vertical-line-bot-2"
          >
            <Match
              country1={data.TOURNAMENT.Matches.Countries[0]}
              country2={data.TOURNAMENT.Matches.Countries[2]}
              matchtime={data.TOURNAMENT.Matches.Time[0]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Japan-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line-2"></div>
            <div className="winner-line-3"></div>
            <div className="horizontal-line-3"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[5]}
              country2={data.TOURNAMENT.Matches.Countries[7]}
              matchtime={data.TOURNAMENT.Matches.Time[1]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/United-States-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Russia-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Russia-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line-3"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[8]}
              country2={data.TOURNAMENT.Matches.Countries[11]}
              matchtime={data.TOURNAMENT.Matches.Time[2]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/Austria-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Spain-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Spain-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line-4"></div>
            <div className="winner-line-4"></div>
            <div className="horizontal-line-4"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[13]}
              country2={data.TOURNAMENT.Matches.Countries[14]}
              matchtime={data.TOURNAMENT.Matches.Time[3]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Netherlands-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
            ></Match>
          </Day>
        </Stage>

        <Stage
          stagenumber="Stage3 flex-container"
          stage={data.TOURNAMENT.Stage.Title[2]}
        >
          <Day day={data.TOURNAMENT.Day.Title[3]}
            linetop ="vertical-line-top-3"
            linebot="vertical-line-bot-3"
          >
            <Match
              country1={data.TOURNAMENT.Matches.Countries[2]}
              country2={data.TOURNAMENT.Matches.Countries[7]}
              matchtime={data.TOURNAMENT.Matches.Time[0]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Russia-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
            ></Match>
            <div className="vertical-space-line-5"></div>
            <div className="winner-line-5"></div>
            <div className="horizontal-line-5"></div>
            <Match
              country1={data.TOURNAMENT.Matches.Countries[11]}
              country2={data.TOURNAMENT.Matches.Countries[13]}
              matchtime={data.TOURNAMENT.Matches.Time[1]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag/256/Spain-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
            ></Match>
          </Day>
        </Stage>

        <Stage
          stagenumber="Stage4 flex-container"
          stage={data.TOURNAMENT.Stage.Title[3]}
        >
          <Day day={data.TOURNAMENT.Day.Title[4]}
            linetop ="vertical-line-top-4"
            linebot="vertical-line-bot-4"
          >
            <Match
              country1={data.TOURNAMENT.Matches.Countries[2]}
              country2={data.TOURNAMENT.Matches.Countries[13]}
              matchtime={data.TOURNAMENT.Matches.Time[0]}
              img1="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
              img2="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Finland-Flag-icon.png"
              winner="http://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/Korea-Flag-icon.png"
            ></Match>
          </Day>
        </Stage>
      </div>
    );
  }
}

export default Tournament;
