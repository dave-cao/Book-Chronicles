import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/post.css"

// components
import Form from "../components/Form";

function Create({ supabase, session }) {
  const [post, setPost] = useState({ title: "", content: "", img: "" })
  const navigate = useNavigate() // for navigation
  const { state } = useLocation();

  // user variables
  const user = session ? session.user : { user_metadata: "" }
  const username = user.user_metadata.name
  const user_id = user.id


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

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  // create book on user submit and inserts into supabase
  const createPost = async () => {

    const { data, error } = await supabase.from('posts').insert({
      title: post.title, content: post.content, img: post.img, category: post.category, username: username, user_id: user_id
    })
    alert("Post inserted into database!")
    navigate("/Book-Chronicles")
  }


  return (
    <>
      <div className="create-container">
        <h1 className="create-post-title pastel-black">Create a <span className="pastel-orange">Post</span></h1>
        <Form handleChange={handleChange} post={post} />
        <button className="btn red-button darkAccent" onClick={createPost} post={post}>Create Post</button>
        <Link to="/Book-Chronicles/getBookInfo"><button className="btn orange-button">Get Book Info</button></Link>
      </div>
    </>
  );
}

export default Create
