import React from 'react';

/* Displays an HTML5 Video given a Source */
class Video extends React.Component {

  render () {

    return (
      <video src={this.props.src} className={this.props.typeName} autoPlay loop muted playsInline>
        Sorry, your browser doesn't support embedded videos, but don't worry, you can <a href={this.props.src}>download it</a> and watch it with your favorite video player!
      </video>
    )
  }
}

class VideoView extends React.Component {

  render () {

    const container_style = {
      backgroundColor: this.props.lightColor
    }

    const display = (key) => {
      return { 
        opacity: (key === this.props.activeVideo) ? '1' : '0'
      }
    }

    const videoListLIs = Object.keys(this.props.videos).map((key, index) => {
      return (
        <li key={index} style={display.call(this, key)} >
            <Video src={this.props.videos[key]} darkColor={this.props.darkColor} typeName={key} />
        </li>
      )
    });

    return (
      <div className="video_list" style={container_style}>
        <ul className="video_list__videos">
          {videoListLIs}
        </ul>
      </div>
    );
    
  }
}


export default VideoView;