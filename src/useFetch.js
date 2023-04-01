import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(url)
      .then(r => {
        if (!r.ok) {
          throw Error('Could not fetch the data for that resource.');
        } else {
          return r.json();
        }
      })
      .then(data => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setisPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;