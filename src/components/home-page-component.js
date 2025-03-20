import BookCardComponent from "./book-card-component"

export default class HomePageComponent{
  constructor(bookService){
    this.bookService = bookService
    this.books = []
  }

  async start() {
    const nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener('click', () => this.onNextClick())

    const prevBtn = document.getElementById('prev-btn')
    prevBtn.addEventListener('click', () => this.onPrevClick())

    this.books = await this.bookService.getBooksByPage()
    this.render()
  }

  render() {
    const mainContainer = document.getElementById('main-container')
    mainContainer.innerHTML = ''

    for (const book of this.books) {
      const bookInfo = {
        title: book.title,
        author: book.authors[0],
        imgUrl: book.formats['image/jpeg'],
        id: book.id,
      }
      const bookCard = new BookCardComponent(bookInfo)
      const card = bookCard.createBookCardHtml()
      mainContainer.appendChild(card)
    }
  }

  async onNextClick() {
    this.books = await this.bookService.getNextPage()
    this.render()
  }

  onPrevClick() {}
}