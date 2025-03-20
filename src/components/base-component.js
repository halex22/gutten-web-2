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

    for (const book of this.books) {
      const bookInfo = {
        title: book.title,
        author: book.authors[0].name,
        imgUrl: book.formats['image/jpeg'],
        id: book.id,
      }
      const bookCard = new BookCardComponent(bookInfo)
      const card = bookCard.createBookCardHtml()
      mainContainer.appendChild(card)
    }
  }


}