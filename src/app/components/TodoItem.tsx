"use client"
import { useState } from "react";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};
export function TodoItem({id, title, complete, toggleTodo, deleteTodo}: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

const handleDelete = async () => {
    setIsDeleting(true);
    await deleteTodo(id);
    setIsDeleting(false);
  };

  return (
    <li className="flex gap-1 items-center">
      <input
      id={id}
      type="checkbox"
      className="cursor-pointer peer"
      defaultChecked={complete}
      onChange={e => toggleTodo(id, e.target.checked)}
      />

      <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">{title}</label>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="border border-red-500 text-red-500 px-2 py-1 rounded hover:bg-red-700 hover:text-white focus-within:bg-red-700 focus-within:text-white outline-none ml-auto"
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
)
}
