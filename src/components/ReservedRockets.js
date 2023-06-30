import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ReservedRocket from './ReservedRocket';
import '../styles/ReservedRockets.css';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.isReserved !== false);
  return (
    <div id="reserved-rocket-container">
      <h2>My Rockets </h2>
      <ul id="reserve-rocket-ul">
        {
        reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            <ReservedRocket name={rocket.name} />
          </li>
        ))
      }
      </ul>

    </div>
  );
};

export default ReservedRockets;
