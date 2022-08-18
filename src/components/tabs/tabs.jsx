import './tabs.scss';
import { connect } from 'react-redux';
import * as actions from '..//../actions'
import classNames from 'classnames';

const Tabs = ({ tabCheap, tabFast, tabOptimal, tab}) => {
    const getButtonClassNames = (order) => ({
        'tab': true,
        'tab-button--focused': tab === order,
      });

    const btnCheapClassNames = classNames(getButtonClassNames('cheapest'));
    const btnFastClassNames = classNames(getButtonClassNames('fastest'));
    const btnOptimalClassNames = classNames(getButtonClassNames('optimal'));

    return (
        <div className="tabs">
            <button className={`tab-left ${btnCheapClassNames}`} onClick={tabCheap}>самый дешевый</button>
            <button className={btnFastClassNames} onClick={tabFast}>самый быстрый</button>
            <button className={`tab-right ${btnOptimalClassNames}`} onClick={tabOptimal}>оптимальный</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      sort: state.tabs,
    };
  };
  
  export default connect(mapStateToProps, actions)(Tabs);