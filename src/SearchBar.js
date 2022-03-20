import React, { useRef } from 'react'

export default function SearchBar(props) {

  const inputValue = useRef();

  function handleSearch(e) {
    const stock = inputValue.current.value;
    if (stock === '') return
    // props.setCompanyName(companyList => {
    //   return [...companyList, stock]
    // });
    props.setCompanyName(stock);
    inputValue.current.value = null;
  }

  return (
    <>
        <h1>Stock Market Chart</h1>
        <label htmlFor='search-stock'>Company stock symbol</label>
        <input type="search" className="search-stock" ref = {inputValue}></input>
        <button onClick={handleSearch}>Search</button>
    </>
  )
}
