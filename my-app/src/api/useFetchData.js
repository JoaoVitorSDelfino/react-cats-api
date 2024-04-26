import { createContext, useState, useEffect, useMemo } from 'react';

export const ContextFetchData = createContext();

const UseFetchData = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async (searchTerm) => {
    const url = `https://api.api-ninjas.com/v1/cats?name=${searchTerm}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
          'X-Api-Key': 'dfUTR8K+sJut7qcjZwadOw==mzaFqsho8Bchu73p'
      },
    })
    setData(await response.json());
  };

  const contextValue = useMemo(() => ({
    data,
    fetchData
  }), [data]);

  console.log(data)

  useEffect(() => {
    fetchData('');
  }, []);

  return (
    <ContextFetchData.Provider value={contextValue}>
      {props.children}
    </ContextFetchData.Provider>
  );
};

export default UseFetchData;