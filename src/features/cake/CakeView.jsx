import {  useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from './cakeSlice'
import { useState } from "react"

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch()
  const [restockAmount, setRestockAmount] = useState(1)

  const handleRestock = (e) => {
    setRestockAmount(parseInt(e.target.value))
  }

  return (
    <div>
        <h2>Number of Cakes - {numberOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(restockAmount))}>Restock cakes</button>
        <label htmlFor="restock-amount">Restock Amount</label>
        <input id="restock-amount" type="number" value={restockAmount} onChange={handleRestock}></input>
    </div>
  )
}
