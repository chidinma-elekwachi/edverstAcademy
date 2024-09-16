import React, { useState } from 'react';
import './SecStyles/Search.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const relatedWords = [
    'JavaScript',
    'React',
    'CSS',
    'HTML',
    'Tailwind CSS',
    'Node.js',
    'TypeScript'
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = relatedWords.filter(word =>
      word.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredWords(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

  return (
    <div className='inWbtn'>
      <form onSubmit={handleSubmit}>
        <input
          className='myInput'
          type='text'
          placeholder='Search for Anything'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type='submit' id='signUpA' className='secondBtn search'>
          Search
        </button>
      </form>

      {showDropdown && filteredWords.length > 0 && (
        <ul className="dropdown">
          {filteredWords.map((word, index) => (
            <li key={index}>
              <a href={`/${word.toLowerCase()}`}>{word}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
