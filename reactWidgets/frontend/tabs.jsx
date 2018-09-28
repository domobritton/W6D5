import React from 'react';

class Tabs extends React.Component {

  render() {
    const {folders} = this.props;
    return (
      <div>

        <h2>Tabs</h2>
        <div className="tabs">
          <div className="tab-header">
            <span></span>
          </div>

          <div className="tab-content">

          </div>
        </div>


      </div>
    );
  }

}

export default Tabs;
