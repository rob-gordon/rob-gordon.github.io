import React from 'react';
import VideoView from './VideoView';
import VideoToggle from './VideoToggle';

class View extends React.Component {

  changeVideo(key) {
    this.props.toggleActiveVideo(key)
  }

  backgroundColor() {
    return (this.props.site === null) ? 'whitesmoke' : this.props.site.lightColor;
  }

  siteTitleColor() {
    return (this.props.site === null) ? 'black' : this.props.site.darkColor;
  }

  mobileToggleVideoPanel() {
    this.props.toggleVideoPanel();
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
        <div id="view" className={this.props.showingVideoPanel ? "showing" : null}>
          <div className="view__container">
            <h3>No site selected.</h3>
          </div>
          <a href="#" className="mobile-toggle" onClick={this.mobileToggleVideoPanel.bind(this)}>|||</a>
          <a href="#" className="mobile-close" onClick={this.mobileToggleVideoPanel.bind(this)}>✕</a>
        </div>
      )
    } else {
      return (
        <div id="view" className={this.props.showingVideoPanel ? "showing" : null}>
          <div className="view__container">
            <div className="view__container__info">
              <h2 className="site-title">{site.sitename}</h2>
              <p className="siteurl">{site.url} <a href={site.url} target="_blank">🔗</a></p>
              <VideoToggle
                videos={site.videos}
                activeVideo={this.props.activeVideo}
                toggleVideo={this.props.toggleActiveVideo}
              />
            </div>
            <VideoView 
              videos={site.videos}
              darkColor={site.darkColor}
              lightColor={site.lightColor}
              activeVideo={this.props.activeVideo}
            />
          </div>
          <a href="#" className="mobile-toggle" onClick={this.mobileToggleVideoPanel.bind(this)}>|||</a>
          <a href="#" className="mobile-close" onClick={this.mobileToggleVideoPanel.bind(this)}>✕</a>
        </div>
      )
    }
  }//render

};

export default View;