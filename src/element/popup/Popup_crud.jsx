import React,{useState} from 'react'
import { todo_update } from '../../logic/axios';
import { useNavigate } from 'react-router-dom';

export default function Popup_crud({visible,onClose,user}) {
    const navigate = useNavigate
    const id=user
    const click =(e)=>{if(e.target.id === 'contaner') onClose()}
    if(!visible)return null;
    const [submit, setsubmit] = useState({todo: ''})
    const handlechang = (e) => {setsubmit({ ...submit, [e.target.name]: e.target.value })}
    const update =()=>{todo_update(id,submit);navigate(0)}
  return (
    <div id='contaner' onClick={click} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
        <div class="relative">
          <div class="w-full mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={update}>
                        <input onChange={handlechang} name='todo' class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="TODO CRUD" required />
                        <button type="submit" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">update</button>
                    </form>
                </div>
                </div>
    </div>
  )
}
