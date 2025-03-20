import BookCardComponent from "./book-card-component"
import StorageService from "../services/storage-service"
import BookService from "../services/book-service"

export default class HomePageComponent{

  /**
   * 
   * @param {BookService} bookService 
   * @param {StorageService} storageService 
   */
  constructor(bookService, storageService){
    this.bookService = bookService
    this.storageService = storageService
    this.books = []
  }

  async start() {
    const nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener('click', () => this.onNextClick())

    const prevBtn = document.getElementById('prev-btn')
    prevBtn.addEventListener('click', () => this.onPrevClick())

    this.books = await this.bookService.getBooksByPage()
    this.render()
    // console.log(this.storageService.loadSavedBooks())
  }

  render() {
    const mainContainer = document.getElementById('main-container')
    mainContainer.innerHTML = ''
    const favBooks = Array.from(this.storageService.loadSavedBooks() ?? [])

    for (const book of this.books) {
      const bookInfo = {
        title: book.title,
        author: book.authors[0].name,
        imgUrl: book.formats['image/jpeg'],
        id: book.id,
        isFavorite: !!favBooks.find(savedBook => book.id === savedBook.id)
      }
      const bookCard = new BookCardComponent(bookInfo, this.storageService)
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