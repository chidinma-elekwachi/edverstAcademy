import React, { useState } from 'react';
import './SecStyles/Search.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const termToRoute = {
    'js': '/frontend-development',
    'javascript': '/frontend-development',
    'react': '/software-engineering',
    'css': '/frontend-development',
    'html': '/frontend-development',
    'tailwind': '/frontend-development',
    'node': '/software-engineering',
    'typescript': '/software-engineering',
    'write': '/technical-writing',
    'writing': '/technical-writing',
    'cyber': '/cyber-security',
    'security': '/cyber-security',
    'network': '/cyber-security',
    'crypto': '/cyber-security',
    'intrusion': '/cyber-security',
    'malware': '/cyber-security',
    'content': '/technical-writing',
  };

  const relatedWords = Object.keys(termToRoute);

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

  const handleLinkClick = (path) => {
    setSearchTerm(''); // Clear the input
    setShowDropdown(false); // Hide the dropdown
    window.location.href = path; // Redirect to the page
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
              <a
                href="#"
                onClick={() => handleLinkClick(termToRoute[word.toLowerCase()])}
              >
                {word}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
