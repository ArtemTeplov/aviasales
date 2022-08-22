import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

import { getKey, getTickets} from '../../API/api';
import { updateSearchId, updateTickets, completedLoading, throwError } from '../../actions';
import { ticketsId } from '../../API/api';

import Filter from "../filter/filter";
import Header from "../header/header";
import MainInformation from "../main-information/main-information";

import './app.scss';

function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.isStop);
    const [percentCount, setPercentCount] = useState(0);
    useEffect(() => {
      try {
        const fetchData = async () => {
          const { searchId } = await getKey();
          dispatch(updateSearchId(searchId));
  
          const getTicketsFetch = setInterval(async () => {
            const { tickets, stop } = await getTickets(searchId);
            const ticketsWithId = ticketsId(tickets);
            dispatch(updateTickets(ticketsWithId));
            setPercentCount((percentCount) => percentCount + 6);
            if (stop) {
              dispatch(completedLoading());
              clearInterval(getTicketsFetch);
            }
          }, 500);
        };
        fetchData();
      } catch (error) {
        dispatch(throwError(error));
      }
  
      return () => dispatch(completedLoading());
    }, [dispatch]);
    return (
        <div className="app">
        <Header />
        {!loading ? <Progress percent={percentCount} showInfo={false} /> : null}
        <div className="information">
            <Filter />
            <MainInformation />
        </div>
    </div>
    );
  }
  
  export default App;