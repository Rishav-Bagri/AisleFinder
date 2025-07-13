import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiMic, FiMicOff } from 'react-icons/fi';

export default function SearchBar({ onSearch, isLoading, productKeys }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const searchContainer = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setQuery(transcript);
          onSearch(transcript.toLowerCase());
          setIsListening(false);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onSearch]);

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
      onSearch(query.trim().toLowerCase());
    }
  };

  const toggleVoiceSearch = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting voice recognition:', error);
        setIsListening(false);
      }
    }
  };

  return (
    <div className="w-full bg-white p-4 flex justify-center items-center shadow-sm">
      <div className="relative w-full max-w-2xl" ref={searchContainer}>
        <form onSubmit={handleSearch} className="flex items-center gap-3">
          <div className="relative flex-grow group">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for products..."
                className="w-full py-2.5 pl-4 pr-12 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                disabled={isLoading}
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-0 transition-colors duration-150 flex items-center"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <FiSearch size={14} className="mr-2 text-blue-500" />
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <button
            type="button"
            onClick={toggleVoiceSearch}
            className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400 ${
              isListening 
                ? 'bg-pink-600/90 text-white shadow-lg shadow-pink-500/30' 
                : 'bg-cyan-600/80 text-white hover:bg-cyan-500/90 hover:shadow-lg hover:shadow-cyan-500/20'
            }`}
            title={isListening ? 'Stop listening' : 'Search with your voice'}
            disabled={isLoading}
          >
            {isListening ? <FiMicOff size={18} className="animate-pulse" /> : <FiMic size={18} />}
          </button>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 flex items-center"
            disabled={isLoading || !query.trim()}
          >
            <FiSearch size={16} className="mr-1.5" />
            Search
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
