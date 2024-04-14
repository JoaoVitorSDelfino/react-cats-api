const Results = ({ data, error }) => {
  // Caso a pesquisa tenha sido bem sucedida, os resultados serão mostrados
  if (error === 0) {
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
  } else {
    return ''
  }
};

export default Results