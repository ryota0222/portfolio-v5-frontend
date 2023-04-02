import axios from 'axios';
import { useState, useEffect } from 'react';

import type { News, Response } from '../types';

type UseNewsData = () => News | null;

export const useNewsData: UseNewsData = () => {
  const [data, setData] = useState<News | null>(null);
  useEffect(() => {
    let ignore = false;
    void (async () => {
      try {
        const endpoint = import.meta.env.PUBLIC_API_ENDPOINT;
        const response = await axios.get<Response>(`${endpoint}/news`);
        const data = response.data;
        if (data.contents.length > 0 && !ignore) setData(data.contents[0]);
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);
  return data;
};
