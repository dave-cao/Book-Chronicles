import { useState } from "react"
import handleChange from "../functions/handleInputChange"
import { Link, useNavigate } from "react-router-dom"
import Auth from "../functions/auth"
import "../styles/sign.css"


function Signin({ supabase }) {
  const auth = Auth(supabase)
  const [userInput, setUserInput] = useState({})
  const navigation = useNavigate();


  const handleSignIn = async () => {
    // signs in user with given emai / pass
    const [data, error] = await auth.signIn(userInput.email, userInput.password)
    const { user, session } = data;

    // if email or password is not within database
    if (!(user || session)) {
      alert(error)
    } else {
      alert("Logged in.")
      navigation("/Book-Chronicles")
    }
  }

  return (
    <div className="outer-sign-container">

      <div className="sign-container">
        <h1 className="sign-title">Sign In</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email"></label>
          <input className="search-input sign-input" onChange={(e) => handleChange(e, setUserInput)} required placeholder="Email" id="email" name="email" type="email"></input>

          <div></div>

          <label htmlFor="password"></label>
          <input className="search-input sign-input" onChange={(e) => handleChange(e, setUserInput)} required placeholder="Password" id="password" name="password" type="password"></input>

          <div></div>


          <button onClick={handleSignIn} type="submit" className="sign-button red-button">Signin</button>
          <div className="sign-link">
            <Link to="/Book-Chronicles/signup">Not a member? Signup!</Link>
          </div>
        </form>


      </div>

    </div>
  )
}

export default Signin
