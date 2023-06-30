import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { storeMissions, joinMission, leaveMission } from '../redux/missions/MissionSlice';
import '../styles/Mission.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      axios.get('https://api.spacexdata.com/v3/missions').then((res) => {
        dispatch(storeMissions(res.data));
      });
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  const renderButton = (mission) => {
    if (mission.reserved) {
      return (
        <button className="leave" type="button" onClick={() => handleLeaveMission(mission.mission_id)}>
          Leave Mission
        </button>
      );
    }
    return (
      <button className="join" type="button" onClick={() => handleJoinMission(mission.mission_id)}>
        Join Mission
      </button>
    );
  };

  return (
    <div className="tablecontainer">
      <div className="tablechild">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="name">{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="btn">
                  {mission.reserved ? (
                    <button type="button" className="active-member-btn">
                      Active Member
                    </button>
                  ) : (
                    <button type="button" className="not-member-btn">
                      NOT A MEMBER
                    </button>
                  )}
                </td>
                <td>{renderButton(mission)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Missions;
