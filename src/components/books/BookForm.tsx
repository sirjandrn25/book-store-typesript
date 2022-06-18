import { useEffect, useState } from 'react'
import InputField from '../UI/InputField'
import React from 'react'

import { Link } from 'react-router-dom'
// import SelectField from '../UI/SelectField'
import { UseCategoryContext } from '../../store/category-context'

import { Book } from '../../models/book'
import useHttp from '../../hooks/useHttp'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import Select from '../UI/Select'
import { UseUIContext } from '../../store/ui-context'
import { UseAuthorContext } from '../../store/author-context'

const authorOptions = ['sukra raj tamang', 'sirja tamang', 'suraj rai', 'manish bhujel', 'kumar shrestha']

type configType = {
  url: string
  method?: string
  data?: object
}
const isEmpty = (value: string) => (value ? '' : 'this field may not be empty')
const isNotSelect = (value: string) => (value ? '' : 'please select the field')

const BookForm: React.FC<{ initialBook?: Book; header: string; config: configType }> = (props) => {
  const { modalOpenHandler } = UseUIContext()
  const { categories } = UseCategoryContext()
  const { authors } = UseAuthorContext()

  const {
    inputState: titleState,
    inputChangeHandler: titleChangeHandler,
    error: titleError,
    inputBlurHandler: titleBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: categoryState,
    inputChangeHandler: categoryChangeHandler,
    error: categoryError,
    inputBlurHandler: categoryBlurHandler,
  } = useInput(isNotSelect)
  const {
    inputState: pagesState,
    inputChangeHandler: pagesChangeHandler,
    error: pagesError,
    inputBlurHandler: pagesBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: priceState,
    inputChangeHandler: priceChangeHandler,
    error: priceError,
    inputBlurHandler: priceBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: quantityState,
    inputChangeHandler: quantityChangeHandler,
    error: quantityError,
    inputBlurHandler: quantityBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: authorState,
    inputChangeHandler: authorChangeHandler,
    error: authorError,
    inputBlurHandler: authorBlurHandler,
  } = useInput(isNotSelect)
  const {
    inputState: issueDateState,
    inputChangeHandler: issueDateChangeHandler,
    error: issueDateError,
    inputBlurHandler: issueDateBlurHandler,
  } = useInput(isEmpty)

  const { sendHttpRequest } = useHttp()
  const navigate = useNavigate()
  useEffect(() => {
    // setBookState(props.initialBook)

    if (props.initialBook) {
      titleChangeHandler(props.initialBook.title)
      pagesChangeHandler(props.initialBook.pages.toString())
      priceChangeHandler(props.initialBook.price.toString())
      quantityChangeHandler(props.initialBook.quantity.toString())
      categoryChangeHandler(props.initialBook.category)
      authorChangeHandler(props.initialBook.author)
      issueDateChangeHandler(props.initialBook.issue_date)
    }
  }, [props.initialBook])

  const formValid =
    titleState.inputValid &&
    pagesState.inputValid &&
    priceState.inputValid &&
    authorState.inputValid &&
    categoryState.inputValid &&
    issueDateState.inputValid &&
    quantityState.inputValid

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formValid) {
      titleBlurHandler()
      pagesBlurHandler()
      categoryBlurHandler()
      issueDateBlurHandler()
      authorBlurHandler()
      priceBlurHandler()
      quantityBlurHandler()
      return
    }

    const book_data = {
      title: titleState.value,
      pages: +pagesState.value,
      price: +priceState.value,
      author: authorState.value,
      category: categoryState.value,
      quantity: +quantityState.value,
      issue_date: issueDateState.value,
    }
    props.config['data'] = book_data
    const response = sendHttpRequest(props.config)
    response.then((resp) => {
      if (resp) {
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 1000)
        console.log(resp)
      }
    })
    // props.saveFunc(book_data)
  }

  return (
    <div className='card w-full bg-base-100 shadow'>
      <div className='card-body'>
        <Link to={'/'} className='btn btn-link'>
          Back To Book List
        </Link>
        <div className='card-title text-2xl font-bold text-purple-600 capitalize'>{props.header}</div>
        <form onSubmit={handleSubmit} action=''>
          <div className='grid grid-cols-2 gap-2 w-full my-2 items-center'>
            <InputField
              handleChange={titleChangeHandler}
              value={titleState.value}
              type='text'
              label='title'
              placeholder='Enter Book Title'
              blurHandler={titleBlurHandler}
              error={titleError}
            />
            <div className='w-full'>
              <label htmlFor='category' className='label-text text-lg text-medium capitalize'>
                Category
              </label>
              <div className='grid grid-cols-12 items-center'>
                <Select
                  label='category'
                  handleChange={categoryChangeHandler}
                  value={categoryState.value}
                  options={categories.map((category) => category.c_name)}
                  blurHandler={categoryBlurHandler}
                  className='col-span-11'
                />
                <span
                  onClick={(e) => modalOpenHandler('category')}
                  className='text-3xl font-bold text-green-400 px-2 cursor-pointer'>
                  +
                </span>
              </div>
              {categoryError && <p className='text-red-500'>{categoryError}</p>}
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2 w-full my-2'>
            <InputField
              type='number'
              handleChange={pagesChangeHandler}
              label='pages'
              placeholder='enter number of pages in book'
              value={pagesState.value}
              blurHandler={pagesBlurHandler}
              error={pagesError}
            />
            <InputField
              type='number'
              label='price'
              handleChange={priceChangeHandler}
              placeholder='enter book price'
              value={priceState.value}
              blurHandler={priceBlurHandler}
              error={priceError}
            />
            <InputField
              type='number'
              value={quantityState.value}
              handleChange={quantityChangeHandler}
              placeholder='Enter book quantity'
              label='quantity'
              blurHandler={quantityBlurHandler}
              error={quantityError}
            />
          </div>
          <div className='grid grid-cols-2 gap-2 my-2'>
            <InputField
              value={issueDateState.value}
              placeholder={'choose book issue date'}
              handleChange={issueDateChangeHandler}
              type='date'
              label='issue_date'
              blurHandler={issueDateBlurHandler}
              error={issueDateError}
            />
            <div className='w-full'>
              <label htmlFor='author' className='label-text text-lg text-medium capitalize'>
                Author
              </label>
              <div className='grid grid-cols-12 items-center'>
                <Select
                  label='author'
                  handleChange={authorChangeHandler}
                  value={authorState.value}
                  options={authors.map((author) => author.fullName)}
                  blurHandler={authorBlurHandler}
                  className='col-span-11'
                />
                <span
                  onClick={(e) => modalOpenHandler('author')}
                  className='text-3xl font-bold text-green-400 px-2 cursor-pointer'>
                  +
                </span>
              </div>
              {authorError && <p className='text-red-500'>{authorError}</p>}
            </div>
          </div>

          <button className='btn btn-primary mt-3 w-[120px]'>save</button>
        </form>
      </div>
    </div>
  )
}

export default BookForm
