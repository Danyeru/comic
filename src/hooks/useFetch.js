import { useState, useEffect, useRef } from "react";

export const useFetch = (orUrl) => {
  const isMounted = useRef(true);

  const proxyUrl = "https://cors-anywhere.herokuapp.com";

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    const proxiedRequest = (url, options = {}) =>
      fetch(`${proxyUrl}/${url}`, {
        ...options,
        headers: {
          ...options.headers,
          "X-Requested-With": "wololo",
        },
      })
        .then((resp) => resp.json())
        .then((res) => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data: res,
            });
          } else {
            console.log("setSate no se llamo");
          }
        })
        .catch(() => {
          setState({
            data: null,
            loading: false,
            error: "No se pudo cargar la info",
          });
        });

    const proxiedGet = (url) => proxiedRequest(url);

    proxiedGet(orUrl);
  }, [orUrl]);

  return state;
};
