import { createContext, useContext, useState, useEffect } from 'react'
import useHttp from '../hooks/useHttp'

type categoryType = {
  id: number
  c_name: string
}

type categoryContextTypes = {
  categories: categoryType[]

  addNewCategory: (category: categoryType) => void
}

const CategoryContext = createContext<categoryContextTypes>({
  categories: [],
  addNewCategory: () => {},
})

type categoryContextProps = {
  children: React.ReactNode
}

const api = 'http://localhost:4000/categories'

export const CategoryContextProvider = (props: categoryContextProps) => {
  const [categories, setCategories] = useState([])
  const { sendHttpRequest } = useHttp()
  useEffect(() => {
    const response = sendHttpRequest({
      url: api,
      method: 'get',
    })
    response.then((data) => {
      if (data) {
        setCategories(data)
      }
    })
  }, [])

  const addNewCategory = (new_category: categoryType) => {
    setCategories((prevState) => {
      return [new_category, ...prevState]
    })
  }

  const contextObj = {
    categories,
    addNewCategory,
  }

  return <CategoryContext.Provider value={contextObj}>{props.children}</CategoryContext.Provider>
}

export const UseCategoryContext = () => useContext(CategoryContext)
