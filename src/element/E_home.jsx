import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {back_slice} from '../stateManage/back'

export default function E_home() {
    const [theme, setTheme] = useState("dark");
    const Dispatch = useDispatch()
    return (
        <div className='self-center'>
            <button onClick={()=>{Dispatch(back_slice(theme));{setTheme(theme === "dark" ? "light" : "dark");}}} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Change</button>
        </div>
       
    )
}