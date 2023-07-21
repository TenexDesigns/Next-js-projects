import Image from "next/image"

function Card2({imageurl,name}) {
  return (
    <div className="px-5 pb-5 pt-2 w-32 h-44 border-solid border-t border-b border border-borderColor ">
        <div className=" h-24 w-24">
            <Image className='p-1 rounded-lg' src={imageurl} width='200' height='300' alt='image'/>
        </div>


        <div className="flex flex-col justify-between items-center">
            <div className="text-sm">
                {name}
            </div>

            <div className=" flex flex-row   px-4 py-1 m-3 font-bold text-sm rounded-full bg-red-200 text-red-500">
              <span className="">-25% </span> 
            </div>
        </div>


    </div>
  )
}

export default Card2