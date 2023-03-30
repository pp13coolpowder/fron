import React from 'react'
import { useGetattraAttractionByIdQuery } from '../../stateManage/Attraction';
import { useSelector } from 'react-redux';

export default function Popup_movie({ visible, onClose}) {
  const id = useSelector((state)=>state.id.value)
  const { data} = useGetattraAttractionByIdQuery(id)
  const click = (e) => { if (e.target.id === 'contaner') onClose() }
  if (!visible) return null;
  return (
    <div id='contaner' onClick={click} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className='dark:text-white gap-2 block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        {data.attraction.name}
        <div className=' my-4 flex justify-center'>
        <img className='max-w-full h-auto' src={data.attraction.coverimage}/>
        </div>
        {data.attraction.detail}
      </div>
    </div>
  )
}
