import { Link } from "react-router-dom"

import img from '../../assets/images/404-error.jpg'

import "./NotFound.css"
function NotFound() {
  return (
    <div className="not-found">
      <h1>4🙃4 Not Found</h1>
      <img src={img} className="404" alt="errr" />
      <p>Go Back <Link to = "/" >Home</Link>.</p>
    </div>
  )
}
export default NotFound
