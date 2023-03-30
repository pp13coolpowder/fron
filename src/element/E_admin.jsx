import React,{useState, useEffect} from 'react'
import { delete_user, list_user } from '../logic/axios'
import Popup_admin from './popup/Popup_admin'
import { useNavigate } from 'react-router-dom'

export default function E_admin() {
    const navigate = useNavigate()
    const [user,setuser]=useState([])
    const loaduser =() =>{
        list_user()
        .then(res => { setuser(res.data) })
        .catch(err => { console.log(err) })
    }
    useEffect(()=>{loaduser()},[])
    
    const [popup,setpopup]=useState(false)
    const handclose =()=> setpopup(false)
    const [iduser,setiduser]=useState()
  return (
    <div className='overflow-x-auto'>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID User
              </th>
              <th scope="col" className="px-6 py-3">
                Firt Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((item,index)=>
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item._id}
              </th>
              <td className="px-6 py-4  dark:text-white">
              {item.first_name}
              </td>
              <td className="px-6 py-4  dark:text-white">
             {item.last_name}
              </td>
              <td className="px-6 py-4  dark:text-white">
                {item.email}
              </td>
              <td className="px-6 py-4 text-right  dark:text-white">
                <svg onClick={()=> {setpopup(true);setiduser(item._id)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </td>
              <td className="px-6 py-4 text-right  dark:text-white">
                <svg onClick={()=>{delete_user(item._id);navigate(0)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </td>
            </tr>
           )}
          </tbody>
      <Popup_admin onClose={handclose} visible={popup} user={iduser}/>
    </div>
  )
}
