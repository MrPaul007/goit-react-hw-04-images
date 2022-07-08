import { useState } from 'react';
import PropTypes from "prop-types";

function Searchbar({onSubmit}) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchFormButton">
          <span className="searchFormButtonLabel">Search</span>
        </button>
    
        <input
          onChange={handleChange}
          className="searchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          required
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.defaultProps = {
  onSubmit: () => {}
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Searchbar;