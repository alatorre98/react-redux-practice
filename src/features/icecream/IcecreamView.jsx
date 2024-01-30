import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"
import { useState } from "react"

export const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams)
  const dispatch = useDispatch()
  const [restockAmount, setRestockAmount] = useState(1)

  const handleRestock = (event) => {
    setRestockAmount((prevAmount) => parseInt(event.target.value))
  }

  return (
    <div>
        <h2>Number of icream - {numberOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order icecream</button>
        <button onClick={() => dispatch(restocked(restockAmount))}>Restock icecreams</button>
        <label htmlFor="restock-Amount">Restock Amount: </label>
        <input 
          id="restock-Amount" 
          type="number" 
          placeholder="Number of items to restock"
          value={restockAmount}
          onChange={handleRestock}
        >
        </input>
    </div>
  )
}
