import { createContext, useContext, useState, useEffect } from 'react'
import useHttp from '../hooks/useHttp'

type author = {
  id: number
  fullName: string
}

type authorContextType = {
  authors: author[]
  addNewAuthor: (new_author: author) => void
}

const AuthorContext = createContext<authorContextType>({
  authors: [],
  addNewAuthor: () => {},
})

type authorContextProvider = {
  children: React.ReactNode
}

export const AuthorContextProvider = (props: authorContextProvider) => {
  const [authors, setAuthors] = useState([])
  const { sendHttpRequest } = useHttp()

  useEffect(() => {
    const response = sendHttpRequest({
      url: 'http://localhost:4000/authors',
      method: 'get',
    })
    response.then((data) => {
      if (data) {
        setAuthors(data)
      }
    })
  }, [])

  const addNewAuthor = (new_author: author) => {
    setAuthors((prevState) => {
      return [new_author, ...prevState]
    })
  }

  const contextObj = {
    authors,
    addNewAuthor,
  }

  return <AuthorContext.Provider value={contextObj}>{props.children}</AuthorContext.Provider>
}

export const UseAuthorContext = () => useContext(AuthorContext)
