import React from 'react'
import tick from '../assets/check.png'
import untick from '../assets/untick.png'
import delete_icon from '../assets/bin.png'
import save_icon from '../assets/save.png'
import cancel_icon from '../assets/close.png'
import edit_icon from '../assets/edit.png'

const TodoItems = ({
  text,
  id,
  isComplete,
  deleteTodo,
  toggleComplete,
  editId,
  editText,
  setEditText,
  editTodo,
  saveEdit,
  cancelEdit,
}) => {
  const isEditing = editId === id;

  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center">
        <img
          onClick={() => toggleComplete(id)}
          className="w-7 cursor-pointer"
          src={isComplete ? tick : untick}
          alt=""
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="ml-4 px-2 py-1 border rounded w-full"
            autoFocus
          />
        ) : (
          <p
            className={`text-slate-700 ml-4 text-[17px] flex-1 ${
              isComplete ? 'line-through' : ''
            }`}
          >
            {text}
          </p>
        )}
      </div>

      {isEditing ? (
        <>
          <img src={save_icon} alt="save" className="w-5 cursor-pointer ml-2"
            onClick={() => saveEdit(id)}
          
          />
            
          <img src={cancel_icon} alt="save" className="w-5 cursor-pointer ml-2"
            onClick={cancelEdit}
           
          />
            
        </>
      ) : (
        <>
          <img
            onClick={() => editTodo(id, text)}
            src={edit_icon} alt="save" className="w-5 cursor-pointer ml-2"
          />
            
         
          <img
            onClick={() => deleteTodo(id)}
            src={delete_icon}
            alt=""
            className="w-5 cursor-pointer ml-2"
          />
        </>
      )}
    </div>
  )
}

export default TodoItems
