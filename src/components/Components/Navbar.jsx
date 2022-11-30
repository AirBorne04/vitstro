import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../utils/store"

export default function Navbar() {
  const { cart } = useContext(CartContext)
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            &#128722; Cart{" "}
            {cart.length > 0 && (
              <>
                <span className="cartItems">{cart.length}</span>
                <span className="cartItems">
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </span>
              </>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
