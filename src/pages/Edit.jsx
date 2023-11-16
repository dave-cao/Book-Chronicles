import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Form from "../components/Form";
import "../styles/post.css"


function Edit({ supabase }) {
  const [post, setPost] = useState({ title: "", content: "", img: "" })
  const navigate = useNavigate()

  // ============== GET THE POST FROM DATABASE ======================
  // get id of poast we want to edit
  const { id } = useParams();
  const getPost = async () => {
    // get our post
    const { data, error } = await supabase.from("posts").select().eq('id', id)
    console.log(data)
    setPost(data[0])
  }
  // run get post first time entering post page
  useEffect(() => {
    getPost();
  }, [])


  // ================ UPDATE THE POST FROM USER INPUT ====================
  // update post based on user input
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
    console.log("Name: ", name, " value: ", value);
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    console.log(value)
  }

  const updatePost = async () => {
    const { error } = await supabase.from("posts").update({ title: post.title, content: post.content, img: post.img, category: post.category }).eq("id", id)
    alert("successfully updated!")
    navigate(`/Book-Chronicles/post/${id}`) // navigate back to the home page when done

  }


  return (
    <div>
      <div className="create-container">
        <h1 className="create-post-title pastel-black">Update <span className="pastel-orange">Post</span></h1>
        <Form handleChange={handleChange} post={post} />
        <button className="btn orange-button" onClick={updatePost}>Update Post</button>
      </div>
    </div>
  )
}

export default Edit
