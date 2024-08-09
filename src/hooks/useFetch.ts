import { useCallback, useState } from 'react';

export const useFetch = <T>() => {
  const baseUrl = 'https://sw-api.starnavi.io/';
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<unknown>(null);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    const fullUrl = baseUrl + url;
    const urlPattern = /^(http|https):\/\/[^ "]+$/;

    if (!urlPattern.test(fullUrl)) {
      setError('URL is Invalid');
      setLoading(false);
      return null;
    }

    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      setData(data.results || data);
      return data;
    } catch (error) {
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, data, error, fetchData } as const;
};
