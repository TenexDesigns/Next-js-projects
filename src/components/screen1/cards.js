import Image from "next/image";

// components/Card.js

const Card = ({ title, imageUrl, description }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
        <Image priority   width={500}  height={100} className="rounded-lg" src={imageUrl} alt={title}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
export default Card;
  

  