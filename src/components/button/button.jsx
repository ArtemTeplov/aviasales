import './button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateTicketsCounter } from '../../actions';

const Button = () => {
    const dispatch = useDispatch();
  const ticketsCounter = useSelector((state) => state.ticketsCounter);


  const onClick = () => {
    const count = ticketsCounter + 5;
    dispatch(updateTicketsCounter(count));
  };
  
    return (
        <div>
          <button className="more-tickets" onClick={onClick}>Показать еще 5 билетов!</button>
        </div>
    )
}

export default Button;