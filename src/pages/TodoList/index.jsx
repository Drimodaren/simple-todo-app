import React, { useState } from 'react'


export const LOADING_STATE = {NEVER:'Never',LOADING:'Loading', LOADED:'Loaded'}
export default function TodoList() {
  const [loading,setLoading]=useState(LOADING_STATE.NEVER)
  const [error,setError]=useState('')
  const [todos,setTodos]=useState([])







    return (
    <div>TodoList</div>
  )
}
