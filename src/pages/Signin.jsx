import { useState } from "react"
import handleChange from "../functions/handleInputChange"
import { Link, useNavigate } from "react-router-dom"
import Auth from "../functions/auth"


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
    <div>

      <h1>Sign In</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email"></label>
        <input onChange={(e) => handleChange(e, setUserInput)} required placeholder="Email" id="email" name="email" type="email"></input>

        <div></div>

        <label htmlFor="password"></label>
        <input onChange={(e) => handleChange(e, setUserInput)} required placeholder="Password" id="password" name="password" type="password"></input>

        <div></div>


        <button onClick={handleSignIn} type="submit" className="red-button">Signin</button>
        <div>
          <Link to="/Book-Chronicles/signup">Not a member? Signup!</Link>
        </div>
      </form>


    </div>
  )
}

export default Signin
