import React from 'react';

class VideoToggle extends React.Component {

  changeVideo(key) {
    this.props.toggleVideo(key);
  }

  render() {

    const videoListToggleLIs = Object.keys(this.props.videos).map((key, index) => {
      return (
        <li 
          key={index} 
          onClick={this.changeVideo.bind(this, key)} 
          className={key === this.props.activeVideo ? 'active pure-button pure-button-primary' : 'pure-button pure-button-primary'}
        >{key}</li>
      )
    });

    return (
      <ul className="video_list__toggle">
        {videoListToggleLIs}
      </ul>
    )
  }
};

export default VideoToggle;
