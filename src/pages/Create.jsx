import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/post.css"

// components
import Form from "../components/Form";
import { toast } from "react-hot-toast";

function Create({ supabase, session }) {
  const [post, setPost] = useState({ title: "", content: "", img: "", tags: [] })
  const navigate = useNavigate() // for navigation
  const { state } = useLocation();

  // user variables
  const user = session ? session.user : { user_metadata: "" }
  const username = user.user_metadata.name
  const user_id = user.id


  // IF WE GRABBED A BOOK
  useEffect(() => {
    if (state) {
      console.log(state)
      setPost({ title: `${state.title} ~ ${state.author}`, content: state.description, img: state.cover_key ? state.cover_url : "", tags: [] })
    }

  }, [])

  // update book based on user input
  const handleChange = (event, isTags = []) => {
    let name;
    let value;

    if (!event.target) {
      name = "content";
      value = event.getData();
    } else if (isTags.length !== 0) {
      name = event.target.name
      value = isTags
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
      title: post.title, content: post.content, img: post.img, tags: post.tags, username: username, user_id: user_id
    })
    toast.success("Post inserted into database!")
    navigate("/Book-Chronicles")
  }

  // TODO: EDIT AND CREATE HAVE A LOT OF SIMIILAR FUNCTIONS
  // ADD OR REMOVE TAGS FROM POST
  // Adds tag into post 
  const addTag = (tag) => {
    tag = tag.trim()
    if (!post.tags.includes(tag) && tag) {
      setPost((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag]
        }
      })
    }
  }

  // removes tag from post
  const deleteTag = (tag) => {
    tag = tag.trim()
    const index = post.tags.indexOf(tag)
    setPost((prev) => {
      const newTags = [...prev.tags.slice(0, index), ...prev.tags.slice(index + 1)]
      return {
        ...prev,
        tags: [...newTags]
      }
    })
  }


  return (
    <>
      <div className="outer-create-container">
        <div className="create-container">
          <h1 className="create-post-title pastel-black">Create a <span className="pastel-orange">Post</span></h1>
          <Form handleChange={handleChange} post={post} addTag={addTag} deleteTag={deleteTag} />

          <button className="btn red-button darkAccent create-button" onClick={createPost} post={post}>Create Post</button>
          <div className="get-book-info-button"><Link to="/Book-Chronicles/getBookInfo">Need book information? Click here!</Link></div>
        </div>

      </div>
    </>
  );
}

export default Create
