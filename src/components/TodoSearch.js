import React from 'react';
import '../css/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      value={searchValue}
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
