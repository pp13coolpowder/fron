import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'

export default function Body(props) {
  const bg = useSelector((state)=>state.bg.value)
  useEffect(() => {
    if (bg === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [bg]);
  return (
    <div className='bg-yellow-300 dark:bg-slate-300 fixed w-full h-full overflow-auto flex flex-col'>{props.children}</div>
  )
}