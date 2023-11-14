import { useState } from "react"
import pressEnter from "../functions/pressEnter"
import "../styles/bookinfo.css"
import Book from "../components/Book"
import Gear from "../components/Gear"

function GetBookInfo() {
  const [bookTitle, setBookTitle] = useState("")
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (event) => {
    setBookTitle(event.target.value)
  }

  const searchForBook = async () => {

    setLoading(true);

    const response = await fetch(`https://openlibrary.org/search.json?q=${bookTitle}`)
    const data = await response.json()
    setBooks([]);
    setBookTitle("")


    for (const book of data.docs) {
      setTimeout(async () => {
        const bookInfoResponse = await fetch(`https://openlibrary.org${book.key}.json`)
        const bookData = await bookInfoResponse.json()
        // if description exists
        let description;
        if (bookData.description) {
          description = bookData.description;

          if (!(typeof description === "string")) {
            description = bookData.description.value;
          }
        }
        const coverResponse = await fetch(`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`)
        const bookObject = { key: bookData.key, title: bookData.title, author: book.author_name ? book.author_name[0] : "", cover_url: coverResponse.url, description: description, cover_key: book.cover_edition_key }
        setBooks((book) => {
          return [...book, bookObject]
        })
      }, 1000)
    }

    setLoading(false)
  }

  const displayBooks = () => {
    const results = books.map((book, id) => {
      return <Book key={id} title={book.title} author={book.author} cover_url={book.cover_url} cover_key={book.cover_key} description={book.description} />

    })
    return results;

  }



  return (
    <>
      <h1 className="book-info-title pastel-black"><b>Grab a <span className="pastel-orange">Book</span></b></h1>
      <div className="search-bar">
        <label htmlFor="title"></label>
        <input value={bookTitle} placeholder="Search for a book..." className="book-input" onKeyUp={(e) => { pressEnter(e, searchForBook) }} onChange={handleTitleChange} type="text" name="title" />
        <button className="btn orange-button" onClick={searchForBook}>Search</button>
      </div>
      <div className="books-container">
        {loading ? <Gear /> : ""}
        {displayBooks()}
      </div>
    </>
  )
}

export default GetBookInfo
