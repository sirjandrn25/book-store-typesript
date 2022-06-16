import { BookContextProvider } from './book-context'
import { UIContextProvider } from './ui-context'

const ContextRootProvider: React.FC = (props) => {
  return (
    <BookContextProvider>
      <UIContextProvider>{props.children}</UIContextProvider>
    </BookContextProvider>
  )
}

export default ContextRootProvider
