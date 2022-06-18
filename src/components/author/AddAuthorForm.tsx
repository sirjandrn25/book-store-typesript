import Modal from '../UI/Modal'
import InputField from '../UI/InputField'
import { FormEvent, useState } from 'react'
import { UseUIContext } from '../../store/ui-context'
import useHttp from '../../hooks/useHttp'
import { UseAuthorContext } from '../../store/author-context'

type authorType = {
  id: number
  fullName: string
}

const AddAuthorForm = () => {
  const [value, setValue] = useState('')
  const { modalOpen, modalClose } = UseUIContext()
  const { addNewAuthor } = UseAuthorContext()
  const { sendHttpRequest } = useHttp()

  if (modalOpen !== 'author') return null

  const inputChangeHandler = (val: string) => {
    setValue(val)
  }
  const blurHandler = () => {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const config = {
      url: 'http://localhost:4000/authors',
      method: 'post',
      data: { fullName: value },
    }
    const response = sendHttpRequest(config)
    response.then((data) => {
      if (data) {
        addNewAuthor(data)
        modalClose()
      }
    })
  }
  return (
    <Modal>
      <h1>Add New Author</h1>
      <form action='' onSubmit={handleSubmit}>
        <InputField
          blurHandler={blurHandler}
          value={value}
          handleChange={inputChangeHandler}
          label='author'
          className='my-2'
          error=''
          placeholder='Enter author name'
          type='text'
        />

        <button className='btn btn-primary'>save</button>
      </form>
    </Modal>
  )
}

export default AddAuthorForm
