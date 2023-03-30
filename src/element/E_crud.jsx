import React, { useState, useEffect } from 'react'
import { todo_list, todo_delete,todo} from '../logic/axios'
import Popup_crud from './popup/popup_crud'
import {useNavigate} from 'react-router-dom'

export default function E_crud() {
    const navigate = useNavigate()
    const [Data, setdata] = useState([])
    const loadData = () => {
        todo_list()
            .then(res => { setdata(res.data) })
            .catch(err => { console.log(err) })
    }
    useEffect(() => { loadData() }, [])

    const [submit, setsubmit] = useState({todo: ''})
    const handlechang = (e) => {setsubmit({ ...submit, [e.target.name]: e.target.value })}
    const handsubmit = ()=>{todo(submit);navigate(0)}

    const [popup,setpopup]=useState(false)
    const handclose =()=> setpopup(false)
    const [iduser,setiduser]=useState()

    return (
        <div>
            <div class="relative">
                <div class="w-full mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handsubmit}>
                        <input onChange={handlechang} name='todo' class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="TODO CRUD" required />
                        <button type="submit" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red to Yellow</button>
                    </form>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                    <tbody>
                        {Data.map((item, index) =>
                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.todo}
                                </th>
                                <td class="px-6 py-4">
                                    <button onClick={()=> {setpopup(true);setiduser(item._id)}} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Update</button>
                                </td>
                                <td class="px-6 py-4">
                                    <button onClick={() => { todo_delete(item._id);navigate(0)}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Popup_crud onClose={handclose} visible={popup} user={iduser}/>
        </div>
    )
}
