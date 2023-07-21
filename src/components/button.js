export function Button({ children, onClick }) {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <button className="py-2 px-4 bg-blue-500 text-white rounded" onClick={handleClick}>
        {children}
      </button>
    );
  }




  
  export function ButtonBanner({ children, onClick }) {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <button className="flex-shrink-0 inline-flex py-2 px-4 bg-white  h-7 text-blue-500 rounded-lg" onClick={handleClick}>
        {children}
      </button>
    );
  }


  


  
  