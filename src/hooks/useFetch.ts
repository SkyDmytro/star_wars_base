import { useCallback, useState } from 'react';

export const useFetch = () => {
  const baseUrl = 'https://sw-api.starnavi.io/';
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<unknown>();
  const [error, setError] = useState<unknown>(null);

  const fetchUrl = useCallback((url: string) => {
    setLoading(true);
    setError(null);
    const fullUrl = baseUrl + url;
    const urlPattern = /^(http|https):\/\/[^ "]+$/;

    if (!urlPattern.test(fullUrl)) {
      setError('URL is Invalid');
      setLoading(false);

      return;
    }

    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setData(data.results);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  return { loading, data, error, fetchUrl, reset } as const;
};
