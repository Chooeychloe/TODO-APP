import React from 'react'
import tick from '../assets/check.png'
import untick from '../assets/untick.png'
import delete_icon from '../assets/bin.png'

const TodoItems = ({text, id, isComplete, deleteTodo,toggleComplete }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=> {toggleComplete(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img  className='w-7' src={ isComplete? tick:untick} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete?"line-through": ""}`}>
            {text}</p>
      </div>
      <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className='w-5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems
