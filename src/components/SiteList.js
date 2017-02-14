import React from 'react';
import VideoView from './VideoView';

class SiteListItem extends React.Component {
  render() {
    return (
      <li>{this.props.sitename}</li>
    );
  }
}

class SiteList extends React.Component {

  changeCurrentSite(title) {
    this.props.changeSite(title);
  }

  render() {

    const itemStyle = (name, curName, color) => {
      return {
        color: name === curName ? color : '#000000'
      }
    }

    const list = this.props.list.map((item, index) => {
      return ( 
        <li 
          key={index} 
          onClick={this.changeCurrentSite.bind(this, item.sitename)} 
          className={item.sitename === this.props.currentSiteName ? 'pure-menu-item active pure-menu-link' : 'pure-menu-item pure-menu-link'}
        >
          {item.sitename}
        </li> 
      )
    });

    return (
      <div className="pure-menu">
        <ul className="site-list pure-menu-list">
          {list}
        </ul>
      </div>
    )
  }//render
};

export default SiteList;