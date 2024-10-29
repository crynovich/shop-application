import { useEffect, useState } from 'react';

// super simple implementation, current versions supports only making calls on component init
export function useGetData<T, N extends unknown[]>(
  serviceFunction: (...args: N) => Promise<T>,
  ...args: N
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    serviceFunction(...args).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  return { data, loading } as
    | { data: T; loading: false }
    | { data: null; loading: true };
}
