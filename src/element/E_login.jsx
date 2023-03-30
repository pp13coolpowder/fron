import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login_user } from '../logic/axios'

export default function E_login() {
  const navigate = useNavigate()
  const [login, setlogin] = useState({ email: '', password: '' })
  const change = (e) => { setlogin({ ...login, [e.target.name]: e.target.value }) }
  const submitlogin = (e) => {
    e.preventDefault();
    login_user(login)
      .then(res => { navigate('/'); localStorage.setItem('token_id', res.data.token) })
      .catch(err => { alert(err.response.data) })
  }
  return (
    <div className='flex items-center'>
      <form onSubmit={submitlogin} className='p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-center'>
          <img class="h-48 mb-6 rounded-lg" src="https://www.whatalifetours.com/wp-content/uploads/2020/02/Michelangelo-David-Full-Body.jpg" alt="image description" />
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" onChange={change} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" onChange={change} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
        </div>
        <Link to='/register' className='flex justify-end'>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
        </Link>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}
