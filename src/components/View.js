import React from 'react';

class SiteView extends React.Component {

}

class View extends React.Component {

  render() {
    const site = this.props.site;

    if (site === null) {
      return (
        <div id="view"><div className="view__container">No site selected.</div></div>)
    } else {
      return (
        <div id="view">
          <div className="view__container">
            <h2 className="site-title">{site.sitename}</h2>
            <p className="siteurl">{site.url}</p>
          </div>
        </div>
      )
    }
  }//render

};

export default View;