// ResultComponent.js
import React from 'react';

const Results = ({ data }) => {
  return (
    <div>
      {data.map((cat, index) => (
        <div key={index} className='catInfo'>
          <h2>{cat.name}</h2>
          <p> Playfulness (scale 1 to 5): {cat.playfulness} </p>
          <p> Length: {cat.length} </p>
          <p> Weight: {cat.min_weight} - {cat.max_weight} pounds </p>
          <p> Life expectancy: {cat.min_life_expectancy} - {cat.max_life_expectancy} years </p>
          <img src={cat.image_link} alt='cat'/>

        </div>
      ))}
    </div>
  );
};

export default Results;