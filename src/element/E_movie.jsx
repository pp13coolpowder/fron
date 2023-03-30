import React,{useState} from 'react'
import { useGetattraAttractionByNameQuery } from '../stateManage/Attraction'
import Popup_movie from './popup/Popup_movie'
import { useDispatch } from 'react-redux'
import { id_slice } from '../stateManage/Id_'

export default function E_movie() {
    const { data, error, isLoading } = useGetattraAttractionByNameQuery()
    const [popup,setpopup]=useState(false)
    const handclose =()=> setpopup(false)
    const dispatch = useDispatch()
    return (
        <div className='relative'>
            {error ? (
                <div>Oh no, there was an error</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                    <div className='grid grid-cols-3 gap-2 dark:text-white'>
                        {data.map(attraction => (
                            <div onClick={()=> {setpopup(true);dispatch(id_slice(attraction.id))}} key={attraction.id} className='flex items-center  justify-center gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                                <img className='w-10 h-10 rounded-full' src={attraction.coverimage}/>
                                {attraction.name}
                            </div>
                        ))}
                    </div>
            ) : null}
            <Popup_movie onClose={handclose} visible={popup}/>
        </div>
    )
}
