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


  handleUserSearch() {
    const form = document.getElementById('form')
    const formData = new FormData(form)
    const searchQuery = formData.get(searchQuery)
    const topicQuery = formData.get(topicQuery)
    console.log(searchQuery, topicQuery)
    // BookService.searchUserQuery(searchQuery,topicQuery);

  }


}