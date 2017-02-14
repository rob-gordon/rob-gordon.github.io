import React from 'react';
import ReactDOM from 'react-dom';

/* Stylesheets */
require('purecss');
require('./main.css');



/* Data */
import clients from './data/clients.js';

/* Components */
import View from './components/View';
import SiteList from './components/SiteList';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      samples: clients.samples,
      winnowSamples: clients.winnowSamples,
      currentSite: null,
      activeVideo: null,
      showingVideoPanel: false
    }
  }

  toggleVideoPanel() {
    let show = !this.state.showingVideoPanel;
    this.setState({
      showingVideoPanel: show
    })
  }

  /* Function changes which site is being viewed. Also resets the view to Desktop */
  changeCurrentSite(siteName) {
    const allClients = this.state.samples.concat(this.state.winnowSamples);
    const found = allClients.filter( (site) => {
      return site.sitename === siteName;
    });
    if (found) {
      
      this.setState({
        currentSite: found[0],
        showingVideoPanel: true
      });

      let videoKeys = Object.keys(found[0]['videos']);
      if (!videoKeys.includes(this.state.activeVideo)) {
        this.setState({
          activeVideo: videoKeys[0]
        })
      }
    }
  }

  changeActiveVideo(key) {
    this.setState({
      activeVideo: key
    });
  }

  render () {
    return (
      <div id="app">
        <div id="main">
          <h1>Rob Gordon's Portfolio</h1>
          <section id="about-me">
            <div className="introduction">
              <p>I am full-stack web developer with 5 years of professional experience. I specialize in Wordpress development, and I have experience working with many other content management systems as well as javascript frameworks.</p>
              <p>I’m particularly interested in augmenting Wordpress development with React and Web Components.</p>
            </div>
          </section>
          <section id="clients">
            <h2>Work Samples</h2>
            <p className="description">The following are samples of websites I have developed for clients.</p>
            <SiteList 
              list={this.state.samples} 
              changeSite={this.changeCurrentSite.bind(this)} 
              currentSiteName={this.state.currentSite != null ? this.state.currentSite.sitename : null} 
            />
          </section>
          <section id="winnow">
            <h2>Working with <a href="http://winnowcreative.com" target="_blank">Winnow Creative</a></h2>
            <p className="description">The following is a selection of Wordpress sites I have developed for the design/branding firm Winnow Creative.</p>
            <SiteList 
              list={this.state.winnowSamples} 
              changeSite={this.changeCurrentSite.bind(this)} 
              currentSiteName={this.state.currentSite != null ? this.state.currentSite.sitename : null} 
            />
          </section>
          <section id="contact">
            <h2>Get in Touch</h2>
            <ul className="social-media-links">
              <li>
                rchristopher.gordon@gmail.com
              </li>
              <li>
                <a href="https://github.com/rob-gordon" target="_blank"><img src="src/resources/github.svg" alt="Github" width="40"/></a>
              </li>
            </ul>
          </section>
        </div>
        <View 
          site={this.state.currentSite}
          activeVideo={this.state.activeVideo}
          toggleActiveVideo={this.changeActiveVideo.bind(this)}
          showingVideoPanel={this.state.showingVideoPanel}
          toggleVideoPanel={this.toggleVideoPanel.bind(this)}
        />
      </div>
    );
  } // render
} // App

// Attach App
ReactDOM.render(<App />, document.getElementById('app-container'));