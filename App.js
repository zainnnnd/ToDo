import React,{ useState, useEffect } from 'react'
//import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'
import {db} from 'firebase'
import {query, collection} from 'firebase/firestore'


export default function App() {
  const [todos, setTodos]=useState(['Learn React', 'Grind Leetcode'])
  //create todo
  //read todo
  useEffect(()=>{
    const q=query(collection(db, 'todos'))
  })

  //update todo
  //delete todo



  return (
    <div className='bg-blue-300 h-screen  w-screen shadow-2xl'>
      <div className='bg-slate-200 ml-60 rounded-xl shadow-2xl mr-60'>
        <div className='font-bold ml-10 mr-10'>
          <h3 className='mb-3  font-bold text-center text-gray-800 text-3xl p-2'>Todo Web</h3>
          <form className='flex justify-between'>
            <input className='border p-2 w-full text-xl' type="text" placeholder='Add Todo' />
            <button className="shadow-lg  font-bold w-8 bg-blue-200"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
</svg></button>
          </form>
          <ul>
            {todos.map((todo, index)=>(
                <Todo key={index} todo={todo} />
            ))}
            
          </ul>
          <p className='font-bold text-center'> You have 2 todos</p>
        </div>
      </div>
    </div>
  )
}
