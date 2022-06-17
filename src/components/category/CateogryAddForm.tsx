import Modal from '../UI/Modal'
import InputField from '../UI/InputField'
import { FormEvent, useState } from 'react'
import { UseUIContext } from '../../store/ui-context'
import { UseCategoryContext } from '../../store/category-context'

const CateogryAddForm = () => {
  const [category, setCategory] = useState('')
  const { addNewCategory } = UseCategoryContext()
  const { modalOpen, modalClose, status } = UseUIContext()
  if (status == 'success') {
    modalClose()
  }
  if (modalOpen !== 'category') return null
  const categoryChangeHandler = (val: string) => {
    setCategory(val)
  }
  const inputBlurHandler = () => {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addNewCategory(category)
  }
  return (
    <Modal onClose={() => {}}>
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
