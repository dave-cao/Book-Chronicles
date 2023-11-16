import { useNavigate } from "react-router-dom"

function Book({ title, author, cover_url, cover_key, description }) {

  const navigate = useNavigate();
  const sendBook = () => {
    navigate("/Book-Chronicles/create", { state: { title: title, author: author, cover_url: cover_url, description: description, cover_key: cover_key } })
  }



  return (
    < div onClick={sendBook} className="book" >
      <div>
        <h4 className="pastel-black">{title}</h4>
        <h5>By: {author}</h5>
        <p>{description}</p>
      </div>
      <img src={cover_key ? cover_url : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"} />
    </div >
  )
}

export default Book
