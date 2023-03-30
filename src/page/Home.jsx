import React,{useEffect} from 'react'
import Body from "../component/Body"
import Footter from "../component/Footter"
import Layout from "../component/Layout"
import Navbar from "../component/Navbar"
import E_home from "../element/E_home"
import { useNavigate } from 'react-router-dom'
import { auth_user } from '../logic/axios'

export default function Home() {
  const token = localStorage.token_id
  const navigate =useNavigate()
  useEffect(()=>{
    auth_user(token)
    .then(res=>{
      if(res.data.status === 'ok'){console.log(res) }
      else{localStorage.clear();navigate('/login')}
    })
    .catch((error) => { console.error('Error', error) })
  },[])
  return (
    <Body>
      <Navbar />
      <Layout>
        <E_home/>
      </Layout>
      <Footter />
    </Body>
  )
}
