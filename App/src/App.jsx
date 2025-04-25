import CheckApi from "./Pages/CheckApi"
import { BrowserRouter, Routes, Route } from "react-router";
import SignupPage from "./Pages/SignupPage"


const App =()=> {
  return <BrowserRouter>
  <Routes>
      
      <Route path="/api" Component={CheckApi} />
      <Route path="/signup" Component={SignupPage} />
  </Routes>
</BrowserRouter>
}

export default App