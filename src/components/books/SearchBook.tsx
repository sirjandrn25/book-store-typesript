import React, { ChangeEvent } from 'react'

type searchType = {
  search: string
  searchHandler: (event: ChangeEvent<HTMLInputElement>) => void
  filterBy: string
  filterVal: string
  filterByHandler: (event: ChangeEvent<HTMLSelectElement>) => void
  filterValHanlder: (event: ChangeEvent<HTMLSelectElement>) => void
}

const authorOptions = ['sukra raj tamang', 'sirja tamang', 'suraj rai', 'manish bhujel', 'kumar shrestha']
const categoryOptions = ['love story', 'ghost', 'music', 'drama', 'science']

const SearchBook = (props: searchType) => {
  console.log(props.filterBy)

  const getFilterOptions = () => {
    if (props.filterBy === 'category') {
      return categoryOptions.map((category) => (
        <option value={category} className='capitalize'>
          {category}
        </option>
      ))
    } else {
      return authorOptions.map((author) => (
        <option value={author} className='author'>
          {author}
        </option>
      ))
    }
  }
  return (
    <form action='' className='w-full my-3'>
      <div className='grid grid-cols-5 gap-1 '>
        <input
          value={props.search}
          onChange={props.searchHandler}
          type='text'
          placeholder='search books by title'
          className='input w-full input-bordered input-accent border-2 focus:outline-none col-span-2'
        />
        <select
          value={props.filterBy}
          onChange={props.filterByHandler}
          className='select w-full focus:outline-none border-2 border-cyan-400'>
          <option value={''}>filter by</option>
          <option value={'category'}>Category</option>
          <option value={'author'}>Author</option>
        </select>
        {props.filterBy && (
          <select
            value={props.filterVal}
            onChange={props.filterValHanlder}
            className='select w-full focus:outline-none border-2 border-cyan-400'>
            <option value={''}>choose {props.filterBy}</option>
            {getFilterOptions()}
          </select>
        )}
      </div>
    </form>
  )
}

export default SearchBook
