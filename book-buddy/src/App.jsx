import AllBooks from "./AllBooks"
import { Routes, Route } from "react-router-dom"


const App = () => {
 

  return (
    <>
  <h1>Book Buddy</h1>

    <Routes>

    <Route path = "/" element = {<AllBooks />}/>

    </Routes>
    </>
  )
}

export default App
