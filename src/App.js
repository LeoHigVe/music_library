import {useState,useRef } from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { SearchContext } from "./Context/SearchContext";
function App() {
  let [message, setMessage] = useState('Search for music !')
  let [data, setData] = useState([])
  let searchInput = useRef('')


  const API_URL = 'https://itunes.apple.com/search?term='


  

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async ()=>{
      document.title = `${term} Music`
      const reponse = await fetch(API_URL + term)
      const resData = await reponse.json()
      if (resData.results.length > 0){
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }
  return(
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
      <SearchBar></SearchBar>
      </SearchContext.Provider>

      {message}
      <Gallery data={data}></Gallery>
    </div>
  )

}

export default App;
