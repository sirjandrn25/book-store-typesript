import React, { ChangeEvent } from 'react'
import { UseCategoryContext } from '../../store/category-context'
import { UseAuthorContext } from '../../store/author-context'

type searchType = {
  search: string
  searchHandler: (event: ChangeEvent<HTMLInputElement>) => void
  filterBy: string
  filterVal: string
  filterByHandler: (event: ChangeEvent<HTMLSelectElement>) => void
  filterValHanlder: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SearchBook = (props: searchType) => {
  const { categories } = UseCategoryContext()
  const { authors } = UseAuthorContext()

  const getFilterOptions = () => {
    if (props.filterBy === 'category') {
      return categories.map((category) => (
        <option key={category.c_name} value={category.c_name} className='capitalize'>
          {category.c_name}
        </option>
      ))
    } else {
      return authors.map((author) => (
        <option key={author.fullName} value={author.fullName} className='author'>
          {author.fullName}
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
