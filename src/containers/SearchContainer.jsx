import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import SearchComponent from "../components/SearchComponent";

import { UserContext } from "../index";

function SearchContainer({ setSwitchSearch, switchSearch, user }) {
  const { users } = useContext(UserContext);

  const [link, setLink] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setLink(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpinner(true);
    if (link[0] === undefined) {
      setSpinner(false);
      setError(true);
      return setTimeout(() => {
        setError(false);
      }, 2000);
    }
    try {
      const shortLink = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const localStorageLinks = JSON.parse(localStorage.getItem("links")) || [];
      localStorage.setItem(
        "links",
        JSON.stringify([
          ...localStorageLinks,
          {
            originalLink: shortLink.data.result.original_link,
            shortLink: shortLink.data.result.short_link,
            date: new Date(),
          },
        ])
      );

      setSwitchSearch(!switchSearch);

      if (users.id !== undefined) {
        const url = shortLink.data.result.original_link;
        const shortUrl = shortLink.data.result.short_link;
        axios
          .post("api/link/add", {
            origilianLink: url,
            shortLink: shortUrl,
            userId: users.id,
          })
          .then((link) => {
            return setSpinner(false);
          })
          .catch((e) => e);
      }
      setSpinner(false);

      return shortLink.data;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <SearchComponent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        spinner={spinner}
        error={error}
      />
    </>
  );
}

export default SearchContainer;
