import { useContext } from "react"
import CartContext from "../utils/store"

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext)
  console.log(cart)

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const addOne = (id) => {
    dispatch({ type: "ADD_ONE", payload: id })
  }

  const removeOne = (id) => {
    dispatch({ type: "REMOVE_ONE", payload: id })
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => addOne(item.id)} className="add-one">
              +
            </button>
            <button onClick={() => removeOne(item.id)} className="remove-one">
              -
            </button>
            <button onClick={() => removeItem(item.id)} className="remove-item">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h2>
      <button
        onClick={clearCart}
        className="remove-item"
        style={{ margin: "auto" }}
      >
        Clear Cart
      </button>
    </div>
  )
}
