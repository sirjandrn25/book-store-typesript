import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './pages/BookList'
import BookAdd from './pages/BookAdd'
import BookEdit from './pages/BookEdit'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<BookList />} />
          <Route path='/add' element={<BookAdd />} />
          <Route path='/edit/:bookId' element={<BookEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
