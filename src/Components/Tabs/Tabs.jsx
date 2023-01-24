import React, { Component } from 'react';
import './Tabs.css'

class Tabs extends Component {
  state = {
    activeTab: 0,
    tabData: [
      {
        title: 'Overview',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      },
      {
        title: 'Impact',
        text: 'Inner Text For Impact.'
      },
      {
        title: 'What You get',
        text: 'What we get Inner Text.'
      }
    ]
  }

  handleTabClick = (index) => {
    this.setState({ activeTab: index });
  }

  render() {
    const { activeTab, tabData } = this.state;

    return (
      <div>
        <div className="tabs">
          {tabData.map((tab, index) => (
            <div
              key={tab.title}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => this.handleTabClick(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabData[activeTab].text}
          <br /> <br />
          <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
    );
  }
}

export default Tabs;
