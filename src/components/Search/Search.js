import React, { useState } from 'react'
import './Search.sass'
import { useDispatch } from 'react-redux'
import { sortPosts, filterPosts } from '../../redux/PostListReducer'

const Search = (props) => {

  const [sort, setSort] = useState('Filter')
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  const onClickHandler = (type) => {
    switch (type) {
      case 'Name':
        setSort('Name')
        dispatch(sortPosts('Name'))
        return
      case 'Time':
        setSort('Time')
        dispatch(sortPosts('Time'))
        return
      default:
        return
    }
  }

  const onChangeHandler = e => {
    setFilter(e.target.value)
    dispatch(filterPosts(e.target.value))
  }

  return (
    <>
      <div className="search-bar input-group">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{sort}</button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => onClickHandler('Name')}>Name</button></li>
          <li><button className="dropdown-item" onClick={() => onClickHandler('Time')}>Time left</button></li>
        </ul>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" onChange={onChangeHandler} value={filter}/>
      </div>
    </>
  )
}

export default Search