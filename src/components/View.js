import React from 'react';

/* Displays an HTML5 Video given a Source */
class Video extends React.Component {
  
  boxShadow () {
    return 'lightgrey 0px 0px 0px 1px, black 0px 0px 27px -4px';
    //return '0px 0px 0px 1px lightgrey, 6px 6px '+this.props.darkColor;
  }

  render () {

    const style = {
      maxWidth: '100%',
      boxShadow: this.boxShadow.call(this)
    }

    return (
      <video src={this.props.src} style={style} autoPlay loop>Sorry, your browser doesn't support embedded videos, 
but don't worry, you can <a href={this.props.src}>download it</a>
and watch it with your favorite video player!</video>
    )
  }
}

class VideoToggle extends React.Component {

  changeVideo(key) {
    console.log('hello');
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
}

class VideoView extends React.Component {

  render () {

    const container_style = {
      backgroundColor: this.props.lightColor
    }

    const display = (key) => {
      return { 
        opacity: key === this.props.activeVideo ? '1' : '0'
      }
    }

    const videoListLIs = Object.keys(this.props.videos).map((key, index) => {
      return (
        <li key={index} style={display.call(this, key)} >
            <Video src={this.props.videos[key]} darkColor={this.props.darkColor} />
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
  }//render
}//SitePreview

class View extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeVideo: 'desktop'
    }
  }

  changeVideo(key) {
    this.setState({
      activeVideo: key
    });
  }

  backgroundColor() {
    return (this.props.site === null) ? 'whitesmoke' : this.props.site.lightColor;
  }

  siteTitleColor() {
    return (this.props.site === null) ? 'black' : this.props.site.darkColor;
  }

  render() {
    const site = this.props.site;

    const style = {
      boxShadow: "inset 4px 0 "+this.backgroundColor()
    }

    const siteTitleStyle = {
      color: this.siteTitleColor()
    }

    if (site === null) {
      return (
        <div id="view"><div className="view__container">No site selected.</div></div>)
    } else {
      return (
        <div id="view">
          <div className="view__container">
            <div className="view__container__info">
              <h2 className="site-title">{site.sitename}</h2>
              <p className="siteurl">{site.url} <a href={site.url} target="_blank">🔗</a></p>
              <VideoToggle
                videos={site.videos}
                activeVideo={this.state.activeVideo}
                toggleVideo={this.changeVideo.bind(this)}
              />
            </div>
            <VideoView 
              videos={site.videos}
              darkColor={site.darkColor}
              lightColor={site.lightColor}
              activeVideo={this.state.activeVideo}
            />
          </div>
        </div>
      )
    }
  }//render

};

export default View;