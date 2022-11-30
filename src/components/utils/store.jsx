import { createContext } from "react"
import { useReducer } from "react"

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const itemInCart = state.find((item) => item.id === action.payload.id)
      if (itemInCart) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload)
    case "CLEAR_CART":
      return []
    case "ADD_ONE":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    case "REMOVE_ONE":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    default:
      return state
  }
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
