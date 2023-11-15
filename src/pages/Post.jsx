import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import timeAgo from "../functions/timeAgo";
import Comment from "../components/Comment";
import pressEnter from "../functions/pressEnter";
import trash from "../assets/trash.png"
import edit from "../assets/edit.png"
import like from "../assets/like.png"
import password from "../functions/password";
import getUsername from "../functions/getUsername";
import postHTMLContent from "../components/StringToJSX";


function Post({ supabase, session }) {
  // hooks
  // states
  const [post, setPost] = useState({})
  const [clicked, setClicked] = useState(false)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")


  // get url param
  const { id } = useParams();

  // navigation
  const navigate = useNavigate()

  // === GET INFORMATION ===
  // get user information
  // user variables
  const user = session ? session.user : { user_metadata: "" }
  const username = user.user_metadata.name
  const user_id = user.id
  const isUserPost = user_id === post.user_id;

  // get our post
  const getPost = async () => {
    const { data, error } = await supabase.from("posts").select().eq('id', id)
    setPost(data[0])
  }

  // get our comments for this post
  const getComments = async () => {
    const { data, error } = await supabase.from("comments").select().order("created_at", { ascending: false }).eq('post_id', id)

    setComments(data)
  }

  // get information first time entering post page
  useEffect(() => {
    getPost();
    getComments();
  }, [])

  // update upvote when clicked
  const upVote = async () => {
    if (!clicked) {
      // update await supabase...
      const { error } = await supabase.from("posts").update({ vote: post.vote + 1 }).eq("id", id)
      console.log("vote has been updated...")

      // make sure it is only clicked once per visit
      setClicked(true)
      setPost({
        ...post,
        vote: post.vote + 1,
      })

    }
  }

  // update comments while typing
  const updateComment = (e) => {
    setComment(e.target.value)
    console.log(e.target.value)
  }

  // delete current post
  const deletePost = async () => {
    if (isUserPost) {
      if (confirm("Are you sure you want to delete this post?")) {
        const { error } = await supabase.from("posts").delete().eq("id", id)
        navigate("/")
      } else {
        console.log("delete is cancelled")
      }
    } else {
      alert("You can't delete this post!'")
    }
  }

  // EDITING POST LOGIC
  const editPost = async () => {
    if (isUserPost) {
      navigate(`/post/${id}/edit`)
    } else {
      alert("You can't access this!")
    }
  }

  // display comments
  const createComment = async () => {

    // insert comment into database
    const { data, error } = await supabase.from("comments").insert({ post_id: id, comment: comment, username: username, user_id: user_id })
    console.log("Comment is inserted into database...")

    // update the comments
    getComments();

    // resets the input field
    setComment("");
  }

  const displayComments = comments.map((comment) => {
    return <Comment key={comment.id} date={comment.created_at} comment={comment.comment} id={comment.id} supabase={supabase} reloadComments={getComments} username={comment.username} user_id={comment.user_id} session_user_id={user_id} />
  })

  // tagColor
  let tagColor = "back-pastel-green pastel-green"
  if (post.category == "review") {
    tagColor = "back-pastel-purple pastel-purple";
  } else if (post.category == "recommend") {
    tagColor = "back-pastel-red pastel-red"
  }



  // returns the post content
  return (
    <div className="post-container">
      <div className="post">
        {/* post details */}
        <div className="post-tags">
          <p>Posted {post.created_at ? timeAgo(post.created_at) : " "}</p>
          <p className={`post-category ${tagColor}`}>#{post.category}</p>
        </div>
        <h2 className="pastel-black">{post.title}</h2>
        <img className="post-image" src={post.img}></img>
        <p>{postHTMLContent(post.content)}</p>
        <p><b>{post.username ? "~ " + post.username : ""}</b></p>


        {/* buttons */}

        <div className="action-images">
          <div onClick={upVote} className="pastel-red like-image">
            <img src={like} /> <b>{post.vote} {post.vote !== 1 ? "likes" : "like"}</b>
          </div>
          {session && isUserPost ?
            <div>
              <img onClick={editPost} className="edit-image" src={edit} />
              <img onClick={deletePost} className="delete-image" src={trash} />
            </div>
            : ""
          }
        </div>

        {/* Comment section */}
        <div className="comments-section">
          <div className="insert-comment-container">
            {session ?
              <input onKeyUp={(e) => { pressEnter(e, createComment) }} value={comment} onChange={updateComment} placeholder="Leave a comment..." type="text" />
              :
              <input disabled placeholder="Sign in to leave a comment..." type="text" />
            }
          </div>
          <div className="comments-container">{displayComments}</div>
        </div>
      </div>
    </div>
  )
}

export default Post
