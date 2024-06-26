import SearchAppBar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Outlet />
    </div>
  )
}

export default App
