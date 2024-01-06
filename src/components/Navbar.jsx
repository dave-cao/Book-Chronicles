import "../styles/navbar.css"
import { Link } from "react-router-dom"
import BackToTopButton from "./BackToTopButton";
import Auth from "../functions/auth"
import toast, { Toaster } from "react-hot-toast";
import "../styles/profile.css"
import plus from "../assets/icons/plus.png"
import { Avatar } from "@radix-ui/react-avatar";


function Navbar({ supabase, session }) {
  const auth = Auth(supabase)
  const handleLogout = () => {
    auth.logout()
    toast("Goodbye!", { icon: "👋" })
  }


  return (
    <nav className="navbar navbar-inverse navbar-expand-md navbar-light">
      <Link to="/Book-Chronicles">
        <img className="navbar-brand" width="64" height="64" src="https://img.icons8.com/cute-clipart/64/book.png" alt="book" />
      </Link>
      {session ? <h3>{session.user.user_metadata.name + "'s" + " Bookshelf"}</h3> :
        <h3>Bookshelf Chronicles</h3>
      }
      <div className="navbar-title-container d-flex align-items-center mx-auto">
      </div>
      <div className="justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className="nav-link-container">
            <Link to="/Book-Chronicles/create" className="plus-link dropdown-item"><img src={plus}></img></Link>
            {session ? "" : <Link to="/Book-Chronicles/signin" className="nav-item nav-link" href="#">Signin</Link>}

            {/* For the profile pic drop down */}
            {session ?
              <div className="nav-item nav-link dropdown">
                <a className="profile-pic-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {session.user.user_metadata.name[0]}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/Book-Chronicles/create" className="create-link dropdown-item">Create</Link>
                  <Link to={`/Book-Chronicles/dashboard`} className="dropdown-item">Dashboard</Link>
                  <Link to="/Book-Chronicles/userposts" className="dropdown-item" href="#">Other Users</Link>
                  <Link to={"/Book-Chronicles/profile"} className="dropdown-item">Edit Profile</Link>
                  <Link onClick={handleLogout} to={"/Book-Chronicles"} className="dropdown-item">Log Out</Link>
                </div>

              </div>
              : ""
            }

          </div>
        </div>
      </div>

      {/* IT WILL BE HERE FOR NOW */}
      <BackToTopButton />
    </nav >
  );
}

export default Navbar;
