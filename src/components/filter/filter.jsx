import './filter.scss';
import Checkbox from '../checkbox/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../actions';


const Filter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    let countSelected = 0;
    const filterList = filters.map(({ title, value, isChecked }) => {
    if (isChecked) {
      countSelected += 1;
    }
    const switchFilter = (e) => {
      const newFilterList = [...filters];
      if (title === 'all' && isChecked === false) {
        newFilterList.map((el) => {
          el.isChecked = true;
          return el;
        });
      }
      if (title === 'all' && isChecked === true) {
        newFilterList.map((el) => {
          el.isChecked = false;
          return el;
        });
      }
      if (title !== 'all') {
        newFilterList.map((el) => {
          if (el.title === title) {
            el.isChecked = e.target.checked;
            if (!e.target.checked) {
              countSelected -= 1;
            }
          }
          if (el.title === 'all') {
            el.isChecked = false;
          }
          return el;
        });
      }
      if (countSelected === 3 && title !== 'all') {
        newFilterList.map((el) => {
          el.isChecked = true;
          return el;
        });
      }
      dispatch(changeFilter(newFilterList));
    };
    return <Checkbox key={title} text={value} onChange={switchFilter} isChecked={isChecked} />;
  });
    return (
        <div className="filter">
            <p className="transfer-options-title">Количество пересадок</p>
            {filterList}
        </div>
    )
}

  
  export default Filter;