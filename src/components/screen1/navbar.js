import RemoveRedEyeOutlinedIcon  from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuOutlinedIcon from  '@mui/icons-material/MenuOutlined';
import Image from "next/image";


function Navbar() {
  return (
    <div className="flex flex-row m-2  justify-between items-center">
  
            <div className="flex flex-row justify-between items-center ">
                <MenuOutlinedIcon className="w-6 h-6 mr-4 text-black"/>
                <Image priority src='/img/logo.png'   alt="logo" width="116" height="36"/>
              
            </div>
                

                <div className='flex flex-row justify-between items-center'>
                    <ShoppingCartOutlinedIcon className='text-darkIcon w-6 h-6 mr-4'/>
                    <PersonOutlinedIcon className='text-darkIcon w-6 h-6'/>
                </div>
                
         

          
          
        
        
        </div>
  )
}

export default Navbar

