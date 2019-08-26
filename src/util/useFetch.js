import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, loading];
};
