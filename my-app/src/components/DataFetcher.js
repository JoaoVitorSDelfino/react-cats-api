import React, { useState, useEffect, memo } from 'react';

const DataFetcher = memo(() => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            var url = 'https://api.api-ninjas.com/v1/cats?name=Siamese'

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'dfUTR8K+sJut7qcjZwadOw==mzaFqsho8Bchu73p'
                },
            })
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData();
  }, [])

  return (
    <div>
      {data ? (
        <div>
          <h2>Data Fetched Successfully</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
});

export default DataFetcher;