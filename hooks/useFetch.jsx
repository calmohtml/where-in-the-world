import { useState, useEffect } from "react";

const useFetch = (url) => {
  /* const [actualValue, changeTheValueFunction] = useState(initialValue) */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //This code will run when the component renders
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);
  //Sending this data to every component that imports 'useFetch'
  return { data, loading, error };
};

export default useFetch;
