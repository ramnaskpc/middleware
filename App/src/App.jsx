import CheckApi from "./Pages/CheckApi"
import { BrowserRouter, Routes, Route } from "react-router";


const App =()=> {
  return <BrowserRouter>
  <Routes>
      
      <Route path="/api" Component={CheckApi} />
  </Routes>
</BrowserRouter>
}

export default App