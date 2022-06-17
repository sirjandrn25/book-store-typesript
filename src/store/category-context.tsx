import { createContext, useContext, useState } from 'react'
import useHttp from '../hooks/useHttp'

type categoryType = {
  id: number
  category_name: string
}

type categoryContextTypes = {
  categories: categoryType[]
  fetchAllCategories: () => void
  addNewCategory: (category: string) => void
}

const CategoryContext = createContext<categoryContextTypes>({
  categories: [],
  fetchAllCategories: () => {},
  addNewCategory: () => {},
})

type categoryContextProps = {
  children: React.ReactNode
}

const api = 'http://localhost:4000/categories'

export const CategoryContextProvider = (props: categoryContextProps) => {
  const [categories, setCategories] = useState([])
  const { sendHttpRequest } = useHttp()

  const addNewCategory = (c_name: string) => {
    const config = {
      url: api,
      method: 'post',
      data: { c_name },
    }
    const response = sendHttpRequest(config)
    response.then((data) => {
      if (data) {
        setCategories((prevState) => {
          return [data, ...prevState]
        })
      }
    })
  }
  const fetchAllCategories = () => {
    console.log('Category')
    const config = {
      url: api,
      method: 'get',
    }
    const response = sendHttpRequest(config)
    response.then((data) => {
      console.log(data)
      if (data) {
        setCategories(data)
      }
    })
  }

  const contextObj = {
    categories,
    addNewCategory,
    fetchAllCategories,
  }

  return <CategoryContext.Provider value={contextObj}>{props.children}</CategoryContext.Provider>
}

export const UseCategoryContext = () => useContext(CategoryContext)
