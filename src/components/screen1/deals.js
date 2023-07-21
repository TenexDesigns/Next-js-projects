import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
export function Deals() {
  return (
    <div className="flex flex-row justify-between  items-center my-4">
        <div  className="flex flex-col  ">
            <div className="  font-semibold">
            Details  and offersy
            </div>

            <div className="">
                Electronic equipments
            </div>
        </div>


        <div className="flex flex-row">
            

        <div className="flex flex-col mx-1  rounded-md  w-11 h-11 items-center  bg-gray200">
            <div>13</div>
            <div>Hour</div>
            </div>

            <div className="flex flex-col mx-1  rounded-md  w-11 h-11 items-center  bg-gray200">
            <span>34</span>
            <span>Min</span>
            </div>

            <div className="flex flex-col mx-1  rounded-md  w-11 h-11 items-center  bg-gray200">
            <span>56</span>
            <span>Sec</span>
            </div>


        </div>


    </div>
  )
}



export function Deals2({title}) {
    return (
  <div className="flex flex-row justify-start items-center ">
      <span className="font-semibold text-lg py-3.5 pl-4">{title}</span>
  </div>
    )
  }



  export function SourceNow({title}) {
    return (

  <button className="flex flex-row justify-start items-center  align-baseline ">
      
        <span className="font-semibold text-blue-600 text-lg py-3.5 pl-4">{title}</span>
        <ArrowForwardOutlinedIcon className='text-blue-600 w-6 h-5'/>
     
  </button>
    )
  }



