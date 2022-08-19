import "./ticket.scss";
import { addMinutes, parseJSON, format } from 'date-fns';


const Ticket = ({price, carrier, segments}) => {

  const [segment1, segment2] = segments;

  function stopsCount (stops){
    switch(stops){
      case 0 : return 'Без пересадок';
      case 1 : return `${stops} пересадка`;
      case 2 : return `${stops} пересадки`;
      case 3 : return `${stops} пересадки`;
      case 4 : return `${stops} пересадки`;
      default: return `${stops} пересадок`;

    }
  }

  function formatDate(dateToFormat) {
    return format(dateToFormat, 'HH:mm');
  }


  function formattedDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes - hours * 60;
    return `${hours}ч ${min}м`;
  }

  function timeOfFlight(duration){
    return formattedDuration(duration)
  }

  function timeStart(date){
    return formatDate(parseJSON(date))
  }

  function timeFinish (date, duration){
    return formatDate(addMinutes(parseJSON(date), duration))
  }

  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="price">{`${price} P`}</p>
        <img className="carrier-logo" src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className="ticket-direction">
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">{`${segment1.origin} – ${segment1.destination}`}</span>
          <br />
          <span className="ticket-info-block_desc">
            {timeStart(segment1.date)} – {timeFinish(segment1.date, segment1.duration)}
          </span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">В пути</span>
          <br />
          <span className="ticket-info-block_desc">{timeOfFlight(segment1.duration)}</span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">{stopsCount(segment1.stops.length)}</span>
          <br />
          <span className="ticket-info-block_desc">{segment1.stops.join(', ')}</span>
        </div>
      </div>
      


      <div className="ticket-direction">
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">{`${segment2.origin} – ${segment2.destination}`}</span>
          <br />
          <span className="ticket-info-block_desc">
          {timeStart(segment2.date)} – {timeFinish(segment2.date, segment2.duration)}
          </span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">В пути</span>
          <br />
          <span className="ticket-info-block_desc">{timeOfFlight(segment2.duration)}</span>
        </div>
        <div className="ticket-info-block">
          <span className="ticket-info-block_head">{stopsCount(segment2.stops.length)}</span>
          <br />
          <span className="ticket-info-block_desc">{segment2.stops.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
