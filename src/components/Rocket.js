import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/Rocket.css';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/RocketsSlice';

const Rocket = ({
  id, name, image, description, isReserved,
}) => {
  const reservedButton = useRef(null);
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(reserveRocket(reservedButton.current.id));
  };

  const handleCancelReservation = () => {
    dispatch(cancelReservation(reservedButton.current.id));
  };

  return (
    <div id="rocket-container">

      <img className="rocket-images" src={image} alt="rocket  images" />
      <div id="rocket-info">
        <span>{name}</span>
        <p>
          {
            isReserved ? (
              <span className="reservedSpan">Reserved</span>
            ) : (' ')
          }

          {' '}
          {description}
        </p>
        {
          !isReserved ? (
            <button ref={reservedButton} onClick={handleReserveRocket} type="button" id={id}>
              Reserve Rocket
            </button>
          ) : (
            <button ref={reservedButton} className="cancelStyle" onClick={handleCancelReservation} type="button" id={id}>
              Cancel Reservation
            </button>
          )
        }

      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};
export default Rocket;
