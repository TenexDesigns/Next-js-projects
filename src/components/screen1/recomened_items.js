import Image from "next/image";
import { CardRecommended } from "./cards_3";


export function Recommended() {
    const images = ['/img/banner.png','/img/curry.jpg','/img/noodles.jpg','/img/stew.jpg']

  return (
    <div className="grid grid-cols-2  gap-x-0 gap-y-0 overflow-y-scroll  ">
               {images.map((category) => (
        <CardRecommended key={category}  imageurl={category} name={category}  />
      ))}
  
    </div>
  )
}
