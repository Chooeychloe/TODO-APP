import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []);
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      alert("Please enter a task");
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-500 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
