import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CartContext from "../utils/store"

export default function ProductComponent() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const { cart, dispatch } = useContext(CartContext)

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
    console.log(cart)
  }

  useEffect(() => {
    fetch(`/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [id])

  return (
    <div className="product">
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {product && (
        <>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button
            onClick={addToCart}
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              margin: "10px 0",
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Go Back
          </button>
        </>
      )}
    </div>
  )
}
