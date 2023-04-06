import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

import type { News, Response } from '../types';

type UseNewsData = () => News | null;

export const useNewsData: UseNewsData = () => {
  const [data, setData] = useState<News | null>(null);
  const fetchData = useCallback(async () => {
    if (document.visibilityState === 'visible') {
      try {
        const endpoint = import.meta.env.PUBLIC_API_ENDPOINT;
        const response = await axios.get<Response>(`${endpoint}/news`);
        const data = response.data;
        if (data.contents.length > 0) setData(data.contents[0]);
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
      }
    }
  }, []);
  useEffect(() => {
    let ignore = false;
    void (async () => {
      !ignore && (await fetchData());
    })();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', fetchData);
    return () => document.removeEventListener('visibilitychange', fetchData);
  }, []);
  return data;
};
