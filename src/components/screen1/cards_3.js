import Image from "next/image";


 export function CardRecommended({imageurl}) {
  return (
    <div>
              <div className="  flex flex-col items-center h-55 w-40 bg-white rounded-lg border border-textGray m-2">
            <div className=" px-4 py-3">
                <Image src={imageurl} className="w- w-24 h-28" width='100' height='200' alt='Images'/>
                        
            </div>

            <div className="flex flex-col  p-1 pl-4">
                <div className="font-bold text-base text-black">
                    $ 10.34

                </div>
                <div className="text-textGray text-sm whitespace-normal">
                T-shirts with multiple colors, for men

                </div>
            </div>

        </div>
      

    </div>
  )
}

