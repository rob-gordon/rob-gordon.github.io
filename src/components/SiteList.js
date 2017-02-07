import React from 'react';

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

    const list = this.props.list.map((item, index) => {
      return ( <li key={index} onClick={this.changeCurrentSite.bind(this, item.sitename)} className={item.sitename === this.props.currentSiteName ? 'active' : ''}>{item.sitename}</li> )
    });

    return (
      <ul className="site-list">
        {list}
      </ul>
    )
  }//render
};

export default SiteList;