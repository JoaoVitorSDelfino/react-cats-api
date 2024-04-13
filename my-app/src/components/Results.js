// ResultComponent.js
import React from 'react';

const Results = ({ data }) => {
  return (
    <div>
      {data.map((cat, index) => (
        <div key={index}>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;