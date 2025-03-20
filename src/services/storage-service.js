export default class StorageService {

  static STORAGE_KEY = 'favoriteBooks'
  constructor() {}

  saveBook(bookToSave){
    console.log('here')
    const savedBooks = this.loadSavedBooks()
    if (!!savedBooks?.find(book => bookToSave.id === book.id)) return
    if (savedBooks) {
      savedBooks.push(bookToSave)
      this.#saveBooksInfo(savedBooks)
    } else {
      localStorage.setItem(StorageService.STORAGE_KEY, JSON.stringify([bookToSave]))
    }
    location.reload()
  }

  loadSavedBooks() {
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY) ) 
  }

  removeSavedBook(bookToRemove) {
    const savedBooks = this.loadSavedBooks()
    if (!savedBooks) return
    const filteredBooks = savedBooks.filter(book => book.id !== bookToRemove.id)
    this.#saveBooksInfo(filteredBooks)
    location.reload()
  }


  #saveBooksInfo(booksToSave) {
    localStorage.setItem(StorageService.STORAGE_KEY, JSON.stringify(Array.from(booksToSave)))
  }
}