import './tabs.scss';

const Tabs = () => {
    return (
        <div className="tabs">
            <button className="tab tab-left" focus>самый дешевый</button>
            <button className="tab">самый быстрый</button>
            <button className="tab tab-right">оптимальный</button>
        </div>
    )
}

export default Tabs;