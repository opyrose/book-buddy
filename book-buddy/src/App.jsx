import AllBooks from "./AllBooks"
import { Routes, Route, Link } from "react-router-dom"
import BookDetails from "./BookDetails"
import Account from "./Account"


const App = () => {
 

  return (
    <>
  <h1>Book Buddy</h1>
  <nav>
    <Link to={'/'}>Home</Link>
    <Link to={'books/29'}>Book of the Month</Link>
    <Link to={'/account'}>Account</Link>
  </nav>

    <Routes>

    <Route path = "/" element = {<AllBooks />}/>
    <Route path ="books/:id" element = {<BookDetails/>}/>
    <Route path ="/account" element={<Account />}/>

    </Routes>
    </>
  )
}

export default App
