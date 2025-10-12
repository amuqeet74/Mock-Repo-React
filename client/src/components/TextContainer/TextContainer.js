import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="intro">
      <h1>
        Realtime Chat Application <span role="img" aria-label="chat">💬</span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO <span role="img" aria-label="heart">❤️</span>
      </h2>
      <h2>
        Try it out right now! <span role="img" aria-label="arrow">⬅️</span>
      </h2>
    </div>

    {users && users.length > 0 && (
      <div className="usersSection">
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <img alt="Online Icon" src={onlineIcon} className="onlineIcon" />
              <span className="username">{name}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
