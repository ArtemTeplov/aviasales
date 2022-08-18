import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './tickets.scss';

import Ticket from '../ticket/ticket';

class Tickets extends React.Component {
  componentDidMount() {
    this.fetchTickets();
  }

  constructor(props) {
    super(props);

    this.fetchTickets = () => {
      const { fetchSearchId, fetchTickets } = this.props;
      fetchSearchId().then(({ searchId }) => {
        fetchTickets(searchId);
      });
    };
  }

  render() {
    const { tickets } = this.props;
    const ticketsData =
      tickets !== '' && tickets !== undefined
        ? tickets.map((ticket, index) => {
            return <Ticket {...ticket} key={index} />;
          })
        : null;

    return <ul className="tickets">{ticketsData}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps, actions)(Tickets);