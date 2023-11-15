import { useState } from "react"
import handleChange from "../functions/handleInputChange"
import { Link, useLocation } from "react-router-dom"
import Auth from "../functions/auth"


function Signin({ supabase }) {
  const auth = Auth(supabase)
  const [userInput, setUserInput] = useState({})
  const { state } = useLocation();

  const handleSignIn = async () => {
    const { user, session } = await auth.signIn(userInput.email, userInput.password)

    if (!(user || session)) {
      alert("Wrong email and / or password...")
    } else {
      alert("Logged in...")
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
        <input onChange={(e) => handleChange(e, setUserInput)} required placeholder="Password" id="password" name="password" type="text"></input>

        <div></div>



        <button onClick={handleSignIn} type="submit" className="red-button">Signin</button>
        <Link to="/signup"><button type="submit" className="orange-button">Signup</button></Link>
      </form>


    </div>
  )
}

export default Signin
