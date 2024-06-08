import { useEffect,useState } from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for music !')
  let [data, setData] = useState([])

  return(
    <div>
      <SearchBar></SearchBar>
      {message}
      <Gallery></Gallery>
    </div>
  )

}

export default App;
