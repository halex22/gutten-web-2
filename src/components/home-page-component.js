import BookCardComponent from "./book-card-component"
import StorageService from "../services/storage-service"
import BookService from "../services/book-service"
import singletonBookService from "../services/book-service-singleton"

export default class HomePageComponent{

  /**
   * 
   * @param {BookService} bookService 
   * @param {StorageService} storageService 
   */
  constructor(bookService, storageService){
    this.bookService = singletonBookService
    this.storageService = storageService
    this.books = []
    this.other = bookService
    this.form = document.getElementById('userForm')
  }

  async start() {
    const nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener('click', () => this.onNextClick())

    const prevBtn = document.getElementById('prev-btn')
    prevBtn.addEventListener('click', () => this.onPrevClick())

    this.form.addEventListener('submit', (event) => this.handleUserSearch(event))

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

  async handleUserSearch(event) {
    event.preventDefault()
    const formData = new FormData(this.form)
    const searchQuery = formData.get('searchQuery')
    const topicQuery = formData.get('topicQuery')
    this.books = await this.bookService.searchUserQuery(searchQuery, topicQuery)
    this.render()
  }



  async onNextClick() {
    this.books = await this.bookService.getNextPage()
    this.render()
  }

  onPrevClick() {}
}