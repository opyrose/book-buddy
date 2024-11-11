import { useEffect, useState } from "react"
import { useParams, useNavigate} from "react-router-dom"


const BookDetails = () => {
  const [selectedBook, setSelectedBook] = useState([]);
  const { id } = useParams();
   const navigate = useNavigate();

  useEffect(() => {

    const getBook = async () => {
      const data = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      const response = await data.json();
      const singleBook = response.book
    
      setSelectedBook(singleBook)

    }
    getBook()

  }, []);

return (
    <>
    <h1>{selectedBook.title}</h1>
    <div id ="single-book" >
    <img src={selectedBook.coverimage} alt={"Cover of ${selectedBook.title}"}
    height={400}
    width={375}/>

    </div>
    <h2>{selectedBook.author}</h2>
    <p>{selectedBook.description}</p>
    <button onClick={(()=>{
      navigate(`/`)
    })}>Back</button>
   
    </>
)

};
export default BookDetails