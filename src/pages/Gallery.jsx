import { useState, useEffect } from "react"

function Gallery({ supabase }) {
  // get the books from the database
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    const { data, error } = await supabase.from("books").select();
    setBooks(data);
  }


  // get books when user goes to home page
  useEffect(() => {
    getBooks()
  }, [])


  // display the books to user (create a separate component later)
  const displayBooks = books.map((book) => {
    return (<li key={book.id}>Title: {book.title}, Author: {book.author}, Description: {book.description}, Category: {book.category}</li>)
  })


  return (
    <>
      <h1>Gallery</h1>
      <h2>Contains all the book information posts</h2>
      <ul>
        {displayBooks}
      </ul>
    </>
  )
}

export default Gallery
