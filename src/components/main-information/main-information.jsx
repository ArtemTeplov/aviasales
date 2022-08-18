import Tabs from "../tabs/tabs";
import Tickets from "../tickets/tickets";
import Button from "../button/button";

const MainInformation = () => {
    return (
        <div className="main-information">
            <Tabs />
            <Tickets />
            <Button />
        </div>
    )
}

export default MainInformation;