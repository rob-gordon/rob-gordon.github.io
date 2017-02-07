const React = require('react');
const ReactDOM = require('react-dom');

/* Stylesheets */
require('purecss');
require('./main.css');

class App extends React.Component {
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
            <ul className="clients-list site-list">
              <li><a href="http://globalgoalslab.org/" target="_blank">The Global Goals Lab</a></li>
              <li><a href="http://littlesun.com/" target="_blank">Little Sun</a></li>
              <li><a href="http://colorama.space/" target="_blank">Colorama</a></li>
              <li><a href="http://roughbeastmagazine.com/" target="_blank">Rough Beast Magazine</a></li>
              <li><a href="http://danubesounds.net/" target="_blank">Danube Sounds</a></li>
            </ul>
          </section>
          <section id="winnow">
            <h2>Working with <a href="http://winnowcreative.com">Winnow Creative</a></h2>
            <p className="description">The following is a selection of Wordpress sites I have developed for the design/branding firm Winnow Creative.</p>
            <ul className="winnow-list site-list">
              <li><a href="http://www.avconusa.com/" target="_blank">AVCON</a></li> 
              <li><a href="http://www.accbox.com/" target="_blank">Axis Corrugated Container</a></li> 
              <li><a href="http://criticalfuelsystems.com/" target="_blank">Critical Fuel Systems</a></li> 
              <li><a href="http://curtiscc.com/" target="_blank">Curtis Construction Co.</a></li> 
              <li><a href="http://www.flex-pay.com/" target="_blank">Flexpay</a></li> 
              <li><a href="http://nccertifiedcareerpathways.com/" target="_blank">NCWorks Certified Career Pathways</a></li> 
              <li><a href="https://www.sciencecloud.com/" target="_blank">Science Cloud</a></li> 
              <li><a href="http://southeasterninteriors.com/" target="_blank">Southeastern Interiors</a></li> 
              <li><a href="https://thewinefeed.com/" target="_blank">The Wine Feed</a></li> 
              <li><a href="http://www.trademarkproperties.com/" target="_blank">Trademark Properties</a></li> 
              <li><a href="http://www.trademarkresidential.com/" target="_blank">Trademark Residential</a></li> 
              <li><a href="http://www.triangleilg.org/" target="_blank">Triangle Industry Liaison Group</a></li>
            </ul>
          </section>
          <section id="contact">
            <h2>Contact Me</h2>
            <form action="contact.php" className="contact-form pure-form pure-form-stacked" method="post">
              <fieldset>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea placeholder="Message" name="user_message" rows="6"></textarea>
                <br/>
                <label htmlFor="request_cv" className="pure-checkbox">
                  Request CV <input type="checkbox" name="request_cv"/>
                </label>
                <br/>
                <button type="submit" className="pure-button pure-button-primary">Submit</button>
              </fieldset>
            </form>
          </section>
        </div>
        <div id="view">
          <div className="view__container">
            <h2 className="site-title">Little Sun</h2>
            <p className="site-info">2016. Berlin, Germany</p>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eaque doloribus, minima iusto, corporis placeat fugit, aliquid dolor, quo porro expedita consectetur illum pariatur! Quisquam voluptatibus hic, id ducimus quas.</p>
          </div>
        </div>
      </div>
    );
  } // render
} // App

// Attach App
ReactDOM.render(<App />, document.getElementById('app-container'));