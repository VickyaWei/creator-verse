import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Card = ({ id, name, description, imageURL, youtube, twitter, instagram, onEdit }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} className="card-image" />}
      <h2 className="card-name">{name}</h2>
      <p className="card-description">{description}</p>

      <div className="card-social-media">
        {youtube && (
          <a href={`https://www.youtube.com/${youtube}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        )}
        {twitter && (
          <a href={`https://www.twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        )}
      </div>

      <div className="card-actions">
        <button onClick={() => navigate(`/view-creator/${id}`)}>
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </button>
        <button onClick={() => navigate(`/edit-creator/${id}`)}>
          <FontAwesomeIcon icon={faEdit} size="lg" />
        </button>
      </div>
    </div>
  );
};
