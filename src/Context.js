import React, { useState, useEffect } from "react";
// import { MusicBrainzApi } from "musicbrainz-api";
// const mbApi = new MusicBrainzApi();
// const apiUrl = "http://musicbrainz.org/ws/2/artist/?query=daft-punk&fmt=json";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const apiUrl =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(async () => {
    // const getArtist = async () => {
    //   const artist = await mbApi.getArtist(
    //     "056e4f3e-d505-4dad-8ec1-d04f521cbb56",
    //     ["releases", "recordings", "url-rels"]
    //   );
    //   console.log(artist);
    // };
    // getArtist();

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);

  return <Context.Provider value={{ allItems }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
