import React from 'react';
import { Card } from '../components/Card'; // Adjust the path if necessary
import "./ShowCreators.css";

const ShowCreators = ({ creators }) => {
  if (!creators.length) return <p>No creators found.</p>;

  return (
    <div className="creators-list">
      {creators.map((creator) => (
        <Card
          key={creator.id}
          id = {creator.id}
          name={creator.name}
          description={creator.description}
          imageURL={creator.imageURL} 
          youtube={creator.youtube} 
          twitter={creator.twitter}
          instagram={creator.instagram}          
          onViewDetails={() => console.log('View details', creator)}
          onEdit={() => console.log('Edit', creator)}
        />
       
      ))}
    </div>
  );
};

export default ShowCreators;
