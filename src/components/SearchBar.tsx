import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const handleOnSubmit = () => {
    console.log("Submitt")
  }

  const handleOnSearch = ()=>{
    console.log("Handle on Search")
  }
  return (
    <Paper component="form" onSubmit={handleOnSubmit} sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl:2, boxShadow: 'none', mr: {sm:5}}} >
      <input className="search-bar" placeholder="Search Term..." value="" onChange={handleOnSearch}/>
      <IconButton sx={{p:'10px', color: 'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar