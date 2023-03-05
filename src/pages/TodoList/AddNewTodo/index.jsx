import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../context'

export default function AddNewTodo() {
const [title,setTitle] = useState('')
const [disabled,setDisabled] = useState(true)
const {newTodo} = useContext(TodoContext)

const handleChangeTitle=(e)=>{
  setTitle(e.target.value)
  if(e.target.value.trim()!==''){
    setDisabled(false)

  } else {
    setDisabled(true)
  }

}

 const handleAddNewTodo =()=>{

  if(title.trim()!=='') {
      const newPartialTodo = { title, completed: false };
      newTodo(newPartialTodo)
      setTitle('')
      setDisabled(true)
  }

 }
  return (
    <div>
      <input type="text" value={title} onChange={handleChangeTitle} />
      <button disabled={disabled} onClick={handleAddNewTodo}>ADD NEW TODO</button>
    </div>
  )
}
