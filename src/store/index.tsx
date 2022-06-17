// import { ReactNode } from 'react'
import { BookContextProvider } from './book-context'
import { UIContextProvider } from './ui-context'
import { CategoryContextProvider } from './category-context'

type propsTypes = {
  children: React.ReactNode
}

const ContextRootProvider = (props: propsTypes) => {
  return (
    <BookContextProvider>
      <CategoryContextProvider>
        <UIContextProvider>{props.children}</UIContextProvider>
      </CategoryContextProvider>
    </BookContextProvider>
  )
}

export default ContextRootProvider
