import BookCardComponent from "./book-card-component"
import BookService from "../services/book-service"
import StorageService from "../services/storage-service"

export default class BaseComponent{


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

  render() {
    const mainContainer = document.getElementById('main-container')
    mainContainer.innerHTML = ''
    const favBooks = Array.from(this.storageService.loadSavedBooks() ?? [])

    for (const book of this.books) {
      console.log(book)
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


}