import axios from "axios";

export const todo_list = async()=> 
await axios.get('http://localhost:9999/list&todo')

export const todo_delete = async(id)=> 
await axios.delete('http://localhost:9999/delete&todo/'+id)

export const todo_update =async(id,value)=> 
await axios.put('http://localhost:9999/update&todo/'+id,value)

export const todo =async(value)=> 
await axios.post('http://localhost:9999/&todo/',value)

//////////////////////

export const register_user = async (value)=>
await axios.post('http://localhost:9999/register',value)

export const login_user = async (value)=>
await axios.post('http://localhost:9999/login',value)

export const auth_user = async(id_token)=>
await axios.post('http://localhost:9999/Auth',{},
    { headers:{id_token} })

export const list_user = async()=>
await axios.get('http://localhost:9999/user')
    
export const delete_user = async(id)=>
await axios.delete('http://localhost:9999/user/'+id,)

export const eidt_user =async(id,value)=> 
await axios.put('http://localhost:9999/user/'+id,value)
