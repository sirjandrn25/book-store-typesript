export class Book {
  id: number
  title: string
  pages: number
  price: number
  author: string
  category: string
  quantity: number
  issue_date: Date

  constructor(
    title: string,
    pages: number,
    price: number,
    author: string,
    category: string,
    quantity: number,
    issue_date: Date
  ) {
    this.id = Math.floor(Math.random() * 1000)
    this.title = title
    this.pages = pages
    this.price = price
    this.author = author
    this.category = category
    this.quantity = quantity
    this.issue_date = issue_date
  }
}
