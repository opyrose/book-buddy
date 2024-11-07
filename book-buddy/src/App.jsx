import AllBooks from "./AllBooks"
import { Routes, Route } from "react-router-dom"
import BookDetails from "./BookDetails"


const App = () => {
 

  return (
    <>
  <h1>Book Buddy</h1>

    <Routes>

    <Route path = "/" element = {<AllBooks />}/>
    <Route path ="books/:id" element = {<BookDetails/>}/>

    </Routes>
    </>
  )
}

export default App
