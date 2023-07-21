import Card2 from "./card_2";
import { Deals } from "./deals";


export function DealsCard() {
    const images = ['/img/banner.png','/img/curry.jpg','/img/noodles.jpg','/img/stew.jpg']
 
  return (
    <div className="flex flex-col bg-slate-50 rounded-sm my-2">

        
<Deals/>
<div className=' flex overflow-x-scroll  scrollbar-hide'>
        {images.map((category) => (
        <Card2 key={category}  imageurl={category} name={category}  />
      ))}</div>
      
    </div>
  )
}
