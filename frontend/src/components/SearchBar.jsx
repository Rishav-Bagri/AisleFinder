import React, { useState, useEffect, useRef } from 'react';

export default function SearchBar({ onSearch, isLoading, productKeys }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchContainer = useRef(null);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainer.current && !searchContainer.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filteredSuggestions = productKeys.filter(key =>
        key.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    onSearch(suggestion.toLowerCase());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      setSuggestions([]);
      onSearch(query.trim().toLowerCase());
    }
  };

  return (
        <div className="w-full bg-white shadow-md p-2 sm:p-4 flex justify-center items-center">
      <div className="relative w-full max-w-lg" ref={searchContainer}>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleChange}
                        placeholder="Search for a product..."
            className="flex-grow px-2 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            disabled={isLoading}
          />
          <button
            type="submit"
                        className="px-3 sm:px-6 py-2 bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Find'}
          </button>
        </form>
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
