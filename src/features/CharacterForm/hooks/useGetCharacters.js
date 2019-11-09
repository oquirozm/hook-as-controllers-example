import axios from 'axios';

import { useState, useEffect } from 'react';

function useCharacterForm() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://the-one-api.herokuapp.com/v1/character', {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` }
      })
      .then(res => {
        setCharacters(res.data.docs);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return {
    characters,
    loading,
    error
  };
}

export default useCharacterForm;
