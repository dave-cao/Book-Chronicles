import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate();

  // go to home page if you are in the wrong area
  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <div>NotFound</div>
  )
}

export default NotFound
