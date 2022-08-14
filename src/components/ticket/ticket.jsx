import logo from "./S7 Logo.png";
import "./ticket.scss";

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="price">13 400 P</p>
        <img className="s7-logo" src={logo} alt="S7" />
      </div>
      <div className="ticket-direction">
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">MOW – HKT</span>
          <br />
          <span className="ticket-info-block_desc">
            10:45 – 08:00
          </span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">В пути</span>
          <br />
          <span className="ticket-info-block_desc">21ч 15м</span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">2 пересадки</span>
          <br />
          <span className="ticket-info-block_desc">HKG, JNB</span>
        </div>
      </div>
      <div className="ticket-direction">
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">HKT – MOV</span>
          <br />
          <span className="ticket-info-block_desc">
            11:20 – 00:50
          </span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">В пути</span>
          <br />
          <span className="ticket-info-block_desc">13ч 30м</span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">1 пересадка</span>
          <br />
          <span className="ticket-info-block_desc">HKG</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
