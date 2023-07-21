import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center border-4 border-black bg-gray-100 
        ${isFocused ? 'border-green-500' : 'border-black'}
         ${isFocused ? 'bg-green-100' : 'bg-gray-100'} rounded-md p-2`}
      >
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-transparent outline-none flex-grow"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default SearchInput;
