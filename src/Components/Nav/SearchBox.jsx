/* eslint-disable react/prop-types */
import './Navbar.css';
import { FiSearch } from "react-icons/fi";
// import { SearchRounded } from "@mui/icons-material";
import { useState } from 'react';

function SearchBox({ onSearch }) {
  const [searchInput, seatSearchInput] = useState('');

  const handleChange = (event) =>{
    const query = event.target.value;
    seatSearchInput(query);
    onSearch(query)
  }
  return (
    <>
    <div className='inputBox'>
        <FiSearch className="search-icon"/>
        <input type='search' placeholder='Search' value={searchInput} onChange={handleChange}/>
    </div>
    </>
  )
}

export default SearchBox;
