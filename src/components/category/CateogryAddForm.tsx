import Modal from '../UI/Modal'
import InputField from '../UI/InputField'
import { FormEvent, useState } from 'react'
import { UseUIContext } from '../../store/ui-context'
import { UseCategoryContext } from '../../store/category-context'
import useHttp from '../../hooks/useHttp'

const CateogryAddForm = () => {
  const [category, setCategory] = useState('')
  const { addNewCategory } = UseCategoryContext()
  const { sendHttpRequest } = useHttp()
  const { modalOpen, modalClose, status } = UseUIContext()

  if (modalOpen !== 'category') return null
  const categoryChangeHandler = (val: string) => {
    setCategory(val)
  }
  const inputBlurHandler = () => {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // addNewCategory(category)
    const config = {
      url: 'http://localhost:4000/categories',
      method: 'post',
      data: { c_name: category },
    }
    const response = sendHttpRequest(config)
    response.then((data) => {
      if (data) {
        addNewCategory(data)
        modalClose()
      }
    })
  }
  return (
    <Modal>
      <h1>Add New Category</h1>
      <form action='' onSubmit={handleSubmit}>
        <InputField
          type='text'
          className='my-2'
          label='category_name'
          value={category}
          placeholder='enter category'
          handleChange={categoryChangeHandler}
          error=''
          blurHandler={inputBlurHandler}
        />
        <button className='btn btn-primary'>save</button>
      </form>
    </Modal>
  )
}

export default CateogryAddForm
