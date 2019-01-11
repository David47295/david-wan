import React, {Component} from 'react';
import OverviewElemUE4 from './OverviewElemUE4'
import OverviewElemWebDev from './OverviewElemWebDev'
import OverviewElemIT from './OverviewElemIT'
import '../../../style/Overview.css';

class Overview extends Component {
  render() {
    return(
      <div className="overview">
        <p>Skills</p>
        <OverviewElemUE4/>
        <OverviewElemWebDev/>
        <OverviewElemIT/>
      </div>
    )
  }
}

export default Overview;
