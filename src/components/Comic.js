import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { MainContent } from "./MainContent";

export const Comic = () => {
  const ran = Math.floor(Math.random() * (2364 - 1) + 1);
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl( `https://xkcd.com/${ran}/info.0.json`);
  }, []);
  console.log(url);
  const { data, loading} = useFetch(url);

  return (
    <div className=" container">
      {loading ? <Loading /> : <MainContent {...data} />}
    </div>
  );
};
