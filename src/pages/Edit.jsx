import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Form from "../components/Form";
import "../styles/post.css"
import { toast } from "react-hot-toast";


function Edit({ supabase }) {
  const [post, setPost] = useState({ title: "", content: "", img: "", tags: [] })
  const navigate = useNavigate()

  // ============== GET THE POST FROM DATABASE ======================
  // get id of poast we want to edit
  const { id } = useParams();
  const getPost = async () => {
    // get our post
    const { data, error } = await supabase.from("posts").select().eq('id', id)
    setPost(data[0])
  }
  // run get post first time entering post page
  useEffect(() => {
    getPost();
  }, [])


  // ================ UPDATE THE POST FROM USER INPUT ====================
  // update post based on user input
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

  const updatePost = async () => {

    const { error } = await supabase.from("posts").update({ title: post.title, content: post.content, img: post.img, tags: post.tags }).eq("id", id)
    toast.success("successfully updated!")
    navigate(`/Book-Chronicles/post/${id}`) // navigate back to the home page when done
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
    <div>
      <div className="outer-create-container">
        <div className="create-container">
          <h1 className="create-post-title pastel-black">Update <span className="pastel-orange">Post</span></h1>
          <Form handleChange={handleChange} post={post} addTag={addTag} deleteTag={deleteTag} />
          <button className="btn orange-button create-button" onClick={updatePost}>Update Post</button>
        </div>
      </div>
    </div>
  )
}

export default Edit
