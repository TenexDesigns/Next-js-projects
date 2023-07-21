import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState , } from 'react';

function Search2() {
    const [focus,setFocus] = useState(false)

    const handleFocus = ()=>{
        setFocus(true)
    }
    const handleBlur = ()=>{
        setFocus(false)
    }
    
  return (
  <div className={` flex flex-row items-center p-2 mx-4 bg-gray-100 rounded-md border-2 
   border-gray-600 ${focus ? 'border-green-400': 'border-gray-600'}`}>
    <SearchOutlinedIcon className='text-greySearch mr-1'/>
    <input placeholder='Search' className='ml-2 bg-transparent outline-none flex-grow' 
    onFocus={handleFocus}
    onBlur={handleBlur}
    />


  </div>
  );
}

export default Search2;
