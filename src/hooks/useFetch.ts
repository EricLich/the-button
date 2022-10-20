import { useEffect, useRef, useState } from "react";
import { customFetch } from "../services/fetch";

// defining return interface
interface useFecthReturn<T> {
  data: T[];
  loading: boolean;
  error: any; // could be improved if we know the kind of errors the api could be sending
}

//custom hook for data fetching that gets an url and return the requested data - using generics to be able to pass different types if needed
// the hook is prepared to return an object with the different necessary states of a query to an api
export const useFetch = <T>(fetchUrl: string): useFecthReturn<T> => {
  // ref to avoid double api call because of React's 18 changes on the useEffect hook
  const mounted = useRef<boolean>(false);
  // defining the initial state of the object to return
  const [fetchReturn, setFetchReturn] = useState<useFecthReturn<T>>({
    data: [],
    error: undefined,
    loading: false
  })

  //with the ref we make sure to only run the query to the api only after the first mounting of the component
  useEffect(() => {
    if (mounted.current) {

      setFetchReturn({ ...fetchReturn, loading: true });
      customFetch(fetchUrl).then(res => {
        setFetchReturn({ ...fetchReturn, data: res, loading: false });
      }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));
      return;
    }

    // change the ref to true to be able to query the api on the next mounting
    return () => {
      mounted.current = true;
    }
  }, []);

  // return object with all necessary data
  return fetchReturn;
}