import { useEffect } from "react"
import { useState } from "react";

const AllBooks = ()=>{
const [bookItem, setBookItem]=useState([])
  useEffect(() =>{

      const getBooks =async()=>{
        const data = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
        const response = await data.json();
        const bookObject = response.books
        console.log(bookObject)
        setBookItem(bookObject)
      }
    getBooks();
  }, []);

return (
  <>
  <h1>All Books</h1>
  <section id= "all-books">
      {
        bookItem.map((book)=>{
          return (
            <>
            <section>

            <img src={book.coverimage}
            alt={"This is the cover of ${book.title}"}
            width={250}
            height={275} />
            <h2>{book.title}</h2>


            </section>
            
            </>


          )
          
        })
      }

  </section>
    
    
  
  </>
)
};
export default AllBooks