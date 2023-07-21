import Card2 from "./card_2"
import { Deals2, SourceNow } from "./deals"


export function ConsumerCard({title}) {
  const images = ['/img/banner.png','/img/curry.jpg','/img/noodles.jpg','/img/stew.jpg']

  return (
    <div className="flex flex-col bg-slate-50 rounded-sm my-2">
        <Deals2 title={title}/>
<div className=' flex overflow-x-scroll  scrollbar-hide'>
        {images.map((category) => (
        <Card2 key={category}  imageurl={category} name={category}  />
      ))}</div>
      <SourceNow title={'Source Now'}/>

      
    </div>
  )
}
