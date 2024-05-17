import React from 'react'

type TooltipParameter = {
  name : string
}

function Tooltip({ name }:TooltipParameter) {
  return (
    <div className='group-hover:w-fit group-hover:px-3 group-hover:py-1 right-1/2 -bottom-9 absolute bg-neutral-800 opacity-0 group-hover:opacity-100 rounded-md w-0 text-lg transition-all translate-x-1/2 duration-200 overflow-hidden ease'>
      { name }
    </div>
  )
}

export default Tooltip