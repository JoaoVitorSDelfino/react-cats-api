import React from 'react'

const SearchButton = ({ text }) => {
  const handleClick = () => {
    console.log('teste')
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default SearchButton