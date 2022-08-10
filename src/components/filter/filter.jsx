import './filter.scss';
import Checkbox from '../checkbox/checkbox';

const Filter = () => {
    return (
        <div className="filter">
            <p className="transfer-options-title">Количество пересадок</p>
            <Checkbox name="all" caption="Все" />
            <Checkbox name="no-transfers" caption="Без пересадок" />
            <Checkbox name="1-transfer" caption="1 пересадка" />
            <Checkbox name="2-transfers" caption="2 пересадки" />
            <Checkbox name="3-transfers" caption="3 пересадки" />
        </div>
    )
}

export default Filter;