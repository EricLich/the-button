import { useEffect, useRef, useState } from "react";
import { customFetch } from "../services/fetch";

interface useFecthReturn<T> {
  data: T[];
  loading: boolean;
  error: any;
}

export const useFetch = <T>(fetchUrl: string): useFecthReturn<T> => {
  const mounted = useRef<boolean>(false);
  const [fetchReturn, setFetchReturn] = useState<useFecthReturn<T>>({
    data: [],
    error: undefined,
    loading: false
  })

  useEffect(() => {
    if (mounted.current) {
      setFetchReturn({ ...fetchReturn, loading: true });
      customFetch(fetchUrl).then(res => {
        setFetchReturn({ ...fetchReturn, data: res, loading: false });
      }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));
      return;
    }
    return () => {
      mounted.current = true;
    }
  }, []);

  return fetchReturn;
}