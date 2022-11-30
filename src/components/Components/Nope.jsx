import { useLocation } from "react-router-dom"

export default function Nope() {
  const location = useLocation()
  return (
    <h2>Huh? You're at {location.pathname}, but you really shouldn't be.</h2>
  )
}
