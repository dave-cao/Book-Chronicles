import timeAgo from "../functions/timeAgo"
import cross from "../assets/cross.png"
import password from "../functions/password"

function Comment({ date, comment, id, supabase, pass, reloadComments, username }) {

  const deleteComment = async () => {
    const testPass = await password.authenticate(pass)
    if (testPass) {
      if (confirm("Are you sure you want to delete this comment?")) {
        const { error } = await supabase.from("comments").delete().eq("id", id)
        reloadComments();
      } else {
        console.log("delete is cancelled")
      }
    } else {
      alert("Wrong password!")
    }

  }


  return (
    <div className="comment">
      <div className="comment-header">
        <small>{username} <span className="time-ago">• {timeAgo(date) ? timeAgo(date) : ""}</span></small>
        <img onClick={deleteComment} src={cross} />
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default Comment
