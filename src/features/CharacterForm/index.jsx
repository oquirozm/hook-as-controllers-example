import React from 'react';
import Loader from 'react-spinners/PacmanLoader';
import useCharacterForm from './hooks/useCharacterForm';
import usePagination from './hooks/usePagination';

const CharacterForm = () => {
  const {
    selectedCharacter,
    characters,
    loading,
    error,
    setters: { setSelectedCharater }
  } = useCharacterForm();

  const {
    page,
    setters: { nextPage, prevPage }
  } = usePagination();

  const onSelectChange = e => {
    const selectedCharId = e.target.value;
    const selectedChar = characters.find(char => selectedCharId === char._id);
    setSelectedCharater(selectedChar);
  };

  const onPrevButtonClick = e => {
    e.preventDefault();
    setSelectedCharater(null);
    prevPage();
  };

  const onNextButtonClick = e => {
    e.preventDefault();
    setSelectedCharater(null);
    nextPage();
  };

  return (
    <div className='form-container'>
      <h2>Choose a character:</h2>

      {selectedCharacter && (
        <table style={{ marginBottom: 10 }}>
          <thead>
            <tr>
              <th>Race</th>
              <th>Gender</th>
              <th>Realm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedCharacter.race}</td>
              <td>{selectedCharacter.gender}</td>
              <td>{selectedCharacter.realm}</td>
            </tr>
          </tbody>
        </table>
      )}

      <form className='form'>
        {loading && <Loader color='#FFF' />}
        {error && <h3 style={{ color: '#FFF' }}>Sorry, there's an error</h3>}
        {characters && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <select onChange={onSelectChange}>
              <option key='first' value=''></option>
              {characters.slice((page - 1) * 10, page * 10).map(char => (
                <option key={char._id} value={char._id}>
                  {char.name}
                </option>
              ))}
            </select>
            <p>Current page: {page}</p>
            <div>
              <button disabled={page <= 1} onClick={onPrevButtonClick}>
                prev page
              </button>
              <button onClick={onNextButtonClick}>next page</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CharacterForm;
