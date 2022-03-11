import { useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'

const FormComponent =(props)=>{
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)
  const [formValid,setFormValid] = useState(false)

  const inputTitle = (event)=>{
    setTitle(event.target.value)
  }

  const inputAmount = (event)=>{
    setAmount(event.target.value)
  }

  const saveItem = (event)=>{
    event.preventDefault()
    const itemData ={
      id: uuidv4(), 
      title: String(title),
      amount: Number(amount)
    }
    props.onAddItem(itemData)
    setTitle('')
    setAmount(0)
  }

  useEffect(()=>{
    const checkData = title.trim().length>0 && amount!= 0
    setFormValid(checkData)
  },[title, amount] )

  return(
    <div>
      <form onSubmit={saveItem}>
        <div className= "form-control">
          <label>list</label>
          <input type="text" placeholder="identify your list" onChange={inputTitle}/>
        </div>
        <div className= "form-control">
          <label>amount</label>
          <input type="number" placeholder="(+ income, - รายจ่าย)" onChange={inputAmount} value={amount}/>
        </div>
        <div >
          <button type="submit" className="btn" disabled={!formValid}>more information</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent