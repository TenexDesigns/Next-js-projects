import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from "next/image";
import { useState } from 'react';

function Navbar() {
  return (
    <div className="flex flex-row m-2 justify-between items-center">
      <div className="flex flex-row justify-between items-center">
        <MenuOutlinedIcon className="w-6 h-6 mr-4 text-black" />
        <Image priority src='/img/logo.png' alt="logo" width="116" height="36" />
      </div>

      <div className='flex flex-row justify-between items-center'>
        <ShoppingCartOutlinedIcon className='text-darkIcon w-6 h-6 mr-4' />
        <PersonOutlinedIcon className='text-darkIcon w-6 h-6' />
      </div>
    </div>
  );
}

function Search2() {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };
  
  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div className={`flex flex-row items-center p-2 mx-4 bg-gray-100 rounded-md border-2 
      border-gray-600 ${focus ? 'border-green-400' : 'border-gray-600'}`}>
      <SearchOutlinedIcon className='text-greySearch mr-1' />
      <input
        placeholder='Search'
        className='ml-2 bg-transparent outline-none flex-grow'
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
        <Search2 />
      </div>
    </div>
  );
}

export default App;
