export default class StorageService {

  static STORAGE_KEY = 'favoriteBooks'
  constructor() {}

  saveBook(bookToSave){
    const savedBooks = this.loadSavedBooks()
    if (savedBooks) {
      savedBooks.add(bookToSave)
      this.#saveBooksInfo(savedBooks)
    } else {
      localStorage.setItem(StorageService.STORAGE_KEY, JSON.stringify([bookToSave]))
    }
  }

  loadSavedBooks() {
    const savedBook = localStorage.getItem(StorageService.STORAGE_KEY)
    return savedBook ? new Set(JSON.parse(savedBook)) : null
  }

  removeSavedBook(bookToRemove) {
    const savedBooks = this.loadSavedBooks()
    if (!savedBooks) return
    if (!savedBooks.delete(bookToRemove)) return 
    this.#saveBooksInfo(savedBooks)
  }


  #saveBooksInfo(booksToSave) {
    localStorage.setItem(StorageService.STORAGE_KEY, JSON.stringify(Array.from(booksToSave)))
  }
}