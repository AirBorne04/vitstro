import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../utils/store"

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { dispatch } = useContext(CartContext)

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="products">
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
            padding: "10px",
            margin: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
            gap: "1rem",
            width: "75%",
          }}
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px" }}
            />
            <h2>{product.name}</h2>
          </Link>
          <p>{product.description}</p>
          <p>${product.price}</p>

          <button
            onClick={() => addToCart(product)}
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
        </div>
      ))}
    </div>
  )
}
