import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedTab: num});
  }

  render() {
    let {folders} = this.props;
    const selected = this.state.selectedTab;
    const tab = folders[this.state.selectedTab];
    const headers = folders.map((el, idx) => {
      let select = idx === selected ? 'active' : '';
      let title = el.title;
      this.content = el.content;
      let id = el.id;
      return (
        <div>
          <li
            key={id}
            className={select}
            onClick={() => this.selectTab(idx)}>
            {title}
          </li>
        </div>
      );
    });
    return (
        <div className='tabDiv'>
          <h4>Tabs</h4>
          <ul className='tabHeader'>{headers}</ul>
          <div className='tabs'>
            <div className='tab-content'>
              <article>
                {tab.content}
              </article>
            </div>
          </div>
        </div>
    );
  }

}

export default Tabs;
