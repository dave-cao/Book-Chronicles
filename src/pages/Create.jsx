import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/post.css"
import password from "../functions/password";
import getUsername from "../functions/getUsername";

// components
import Form from "../components/Form";

function Create({ supabase }) {
  const [post, setPost] = useState({ title: "", content: "", img: "" })
  const navigate = useNavigate() // for navigation
  const { state } = useLocation();

  // functions
  const username = getUsername() || "null";

  // IF WE GRABBED A BOOK
  useEffect(() => {
    if (state) {
      setPost({ title: `${state.title} ~ ${state.author}`, content: state.description, img: state.cover_key ? state.cover_url : "" })
    }

  }, [])

  // update book based on user input
  const handleChange = (event) => {
    let name;
    let value;

    if (!event.target) {
      name = "content";
      value = event.getData();
    } else {
      name = event.target.name
      value = event.target.value
    }



    console.log("name: ", name, " value: ", value);
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  // create book on user submit and inserts into supabase
  const createPost = async () => {

    // generate hashed password
    const pass = prompt("Set a password for this post...");
    const hash = password.generateHash(pass);
    const { data, error } = await supabase.from('posts').insert({
      title: post.title, content: post.content, img: post.img, category: post.category, pass: hash, username: username
    })
    alert("Post inserted into database!")
    navigate("/")
  }


  return (
    <>
      <div className="create-container">
        <h1 className="create-post-title pastel-black">Create a <span className="pastel-orange">Post</span></h1>
        <Form handleChange={handleChange} post={post} />
        <button className="btn red-button darkAccent" onClick={createPost} post={post}>Create Post</button>
        <Link to="/getBookInfo"><button className="btn orange-button">Get Book Info</button></Link>
      </div>
    </>
  );
}

export default Create
