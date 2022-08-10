import Filter from "../filter/filter";
import Header from "../header/header";
import MainInformation from "../main-information/main-information";

import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="information">
                <Filter />
                <MainInformation />
            </div>
        </div>
    )
}

export default App;