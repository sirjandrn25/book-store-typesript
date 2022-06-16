import axios from 'axios'

const bookApi = 'http://localhost:4000/books'

export const asyncFetchBooks = async () => {
  return await axios(bookApi)
    .then((resp) => {
      return resp.data
    })
    .catch((error) => {
      throw error
    })
}
