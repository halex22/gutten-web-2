import BookDetailComponent from "./book-detail-component"
import BookService from "../services/book-service"
import StorageService from "../services/storage-service"

export default class DetailPageComponent {
  
    /**
   * 
   * @param {BookService} bookService 
   * @param {StorageService} storageService 
   * @param {string} bookId
   */
  constructor(bookService, storageService, bookId) {
    this.bookService = bookService
    this.storageService = storageService
    this.bookId = bookId
    this.singleBook = {}
  }

  async start() {
    console.log(DetailPageComponent.instance)
    this.singleBook = await this.bookService.getBookById(this.bookId)
    this.render()
  }

  render() {
    const detailComponent = new BookDetailComponent(this.singleBook, this.storageService)
    detailComponent.createBookHtml()
  }



}