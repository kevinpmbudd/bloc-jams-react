import React, { Component } from 'react';

class SongTrackButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  playing() {
    return (this.props.currentSong === this.props.song) && this.props.isPlaying;
  }

  paused() {
    return (this.props.currentSong === this.props.song) && this.props.isPaused;
  }

  render() {
    return (
      <button className="song-track-btn"
              onMouseEnter={() => this.onMouseEnter()}
              onMouseLeave={() => this.onMouseLeave()}>
        {
          !this.state.hover && !this.playing() && !this.paused() && <span>{this.props.index + 1}</span>
        }
        {
          this.state.hover && !this.playing() && <span className="ion-play"></span>
        }
        {
          this.playing() && <span className="ion-pause"></span>
        }
        {
          !this.state.hover && this.paused() && <span className="ion-play"></span>
        }

      </button>
    )
  }
}
export default SongTrackButton;
