import React from 'react'

const SearchBook = () => {
  return (
    <form action='' className='w-full my-3'>
      <div className='grid grid-cols-5 gap-1 '>
        <input
          type='text'
          placeholder='search books'
          className='input w-full input-bordered input-accent col-span-2 border-2 focus:outline-none'
        />
        <select className='select w-full select-primary col-span-2 focus:outline-none'>
          <option disabled selected>
            Search By
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <button className='btn btn-accent'>search</button>
      </div>
    </form>
  )
}

export default SearchBook
