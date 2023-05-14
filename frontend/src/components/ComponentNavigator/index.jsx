import React, { useEffect} from 'react'

const ComponentNavigator = ({
    count,
    setIndexToShow,
    indexToShow
}) => {
  
  useEffect(() => {
    const timer =  setInterval(() => {
        setIndexToShow((curIndex) => {
          if(curIndex < count-1){
             return curIndex+1;
          }
          else if(curIndex === count-1)
           return 0;
        })
        
       },5000)
       return () => {
        clearInterval(timer)
       }
  },[indexToShow])


  return (
    <div>
        {Array(count)
        .fill(0)
        .map((_, idx) => {
          return(
            <button onClick={() => setIndexToShow(idx)} key={idx} className ={`${indexToShow === idx ? "bg-gray_401" : "bg-light_green_700"} rounded-full w-[0.5rem] h-[0.5rem] m-4`}></button>
          )
        })}
    </div>
  )
}

export default ComponentNavigator