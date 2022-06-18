// import { ReactNode } from 'react'
import { BookContextProvider } from './book-context'
import { UIContextProvider } from './ui-context'
import { CategoryContextProvider } from './category-context'
import { AuthorContextProvider } from './author-context'

type propsTypes = {
  children: React.ReactNode
}

const ContextRootProvider = (props: propsTypes) => {
  return (
    <BookContextProvider>
      <AuthorContextProvider>
        <CategoryContextProvider>
          <UIContextProvider>{props.children}</UIContextProvider>
        </CategoryContextProvider>
      </AuthorContextProvider>
    </BookContextProvider>
  )
}

export default ContextRootProvider
