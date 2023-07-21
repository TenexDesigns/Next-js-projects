import Image from "next/image";

// components/Card.js

const Card = ({ title, imageUrl, description }) => {
    return (
      <div className="block flex-shrink-0 w-32 h-44 rounded overflow-hidden shadow-lg m-2">
        <Image priority   width={500}  height={100} className="rounded-lg" src={imageUrl} alt={title}/>
        <div className="px-6 py-4">
          <div className="font-bold  mb-2">{title}</div>
          <p className="text-gray-700 ">{description}</p>
        </div>
      </div>
    );
  };
  
export default Card;
  

  