import { useMemo } from 'react';

const useFetchData = () => {
  const fetchData = async (searchTerm) => {
    try {
        const url = 'https://api.api-ninjas.com/v1/cats?name=' + searchTerm

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'dfUTR8K+sJut7qcjZwadOw==mzaFqsho8Bchu73p'
            },
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  };

  return useMemo(() => fetchData, []);
};

export default useFetchData;