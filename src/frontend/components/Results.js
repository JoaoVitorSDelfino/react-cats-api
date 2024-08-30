const Results = ({ data, error }) => {
  if (error === 0) {
      return (
          <div>
              <div className='catInfo'>
                  <p>Nome: {data.name}</p>
                  <p>Descrição: {data.description}</p>
                  <img src={data.image} alt='cat'/>
              </div>
          </div>
      )
  } else {
      return null
  }
}

export default Results