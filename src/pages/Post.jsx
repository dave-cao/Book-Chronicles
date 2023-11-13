import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import timeAgo from "../functions/timeAgo";
import Comment from "../components/Comment";
import pressEnter from "../functions/pressEnter";
import trash from "../assets/trash.png"
import edit from "../assets/edit.png"
import like from "../assets/like.png"


function Post({ supabase }) {
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

  // get our post
  const getPost = async () => {
    const { data, error } = await supabase.from("posts").select().eq('id', id)
    console.log(data)
    setPost(data[0])
  }

  // get our comments for this post
  const getComments = async () => {
    const { data, error } = await supabase.from("comments").select().order("created_at", { ascending: false }).eq('post_id', id)
    console.log("Comment data:", data)
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
    if (confirm("Are you sure you want to delete this post?")) {
      const { error } = await supabase.from("posts").delete().eq("id", id)
      navigate("/")
    } else {
      console.log("delete is cancelled")
    }
  }

  // display comments
  const createComment = async () => {
    // insert comment into database
    const { data, error } = await supabase.from("comments").insert({ post_id: id, comment: comment })
    console.log("Comment is inserted into database...")

    // update the comments
    getComments();

    // resets the input field
    setComment("");
  }

  const displayComments = comments.map((comment) => {
    return <Comment key={comment.id} date={comment.created_at} comment={comment.comment} />
  })

  // tagColor
  let tagColor = "back-pastel-green pastel-green"
  if (post.category == "review") {
    tagColor = "back-pastel-purple pastel-purple";
  } else if (post.category == "recommend") {
    tagColor = "back-pastel-red pastel-red"
  }


  function createMarkup() {
    return { __html: post.content };
  }

  function postContent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
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
        <p>{postContent()}</p>
        <div></div>

        {/* buttons */}

        <div className="action-images">
          <div onClick={upVote} className="pastel-red like-image">
            <img src={like} /> <b>{post.vote} {post.vote !== 1 ? "likes" : "like"}</b>
          </div>
          <div>
            <Link className="edit-image-link" to={`/post/${post.id}/edit`}> <img className="edit-image" src={edit} /> </Link>
            <img onClick={deletePost} className="delete-image" src={trash} />
          </div>
        </div>

        {/* Comment section */}
        <div className="comments-section">
          <div className="insert-comment-container">
            <input onKeyUp={(e) => { pressEnter(e, createComment) }} value={comment} onChange={updateComment} placeholder="Leave a comment..." type="text" />
          </div>
          <div className="comments-container">{displayComments}</div>
        </div>
      </div>
    </div>
  )
}

export default Post
