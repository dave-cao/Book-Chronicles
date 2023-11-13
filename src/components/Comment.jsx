import timeAgo from "../functions/timeAgo"

function Comment({ date, comment }) {
  return (
    <div className="comment">
      <small>~ {timeAgo(date) ? timeAgo(date) : ""}</small>
      <p>{comment}</p>
    </div>
  )
}

export default Comment
