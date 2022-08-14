import './tabs.scss';
import { connect } from 'react-redux';
import * as actions from '..//../actions'

const Tabs = ({ state, tabCheap, tabFast, tabOptimal}) => {
    return (
        <div className="tabs">
            <button className="tab tab-left" onClick={tabCheap}>самый дешевый</button>
            <button className="tab" onClick={tabFast}>самый быстрый</button>
            <button className="tab tab-right" onClick={tabOptimal}>оптимальный</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      sort: state.tabs,
    };
  };
  
  export default connect(mapStateToProps, actions)(Tabs);