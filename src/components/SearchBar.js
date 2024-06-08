import { useState } from "react";
function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form>
            <input type="text" placeholder="Enter a search term here"></input>
            <input type="submit"></input>
        </form>
    )

}
export default SearchBar