import StorageService from "../services/storage-service"

export default class BookCardComponent {
  /**
   * 
   * @param {{any: any}} bookInfo 
   * @param {StorageService} storageService 
   */
  constructor(bookInfo, storageService){
    this.bookInfo = bookInfo
    this.storageService = storageService
  }



  createBookCardHtml() {
    const bookContainer = document.createElement('div')
    bookContainer.classList.add('book-container')
    bookContainer.innerHTML =  `

      <div class="img-container">
        <img src="${this.bookInfo.imgUrl}" alt="" loading="lazy">
      </div>
      <div class="book-info">
        <h3>
        <a href="/detail.html?id=${this.bookInfo.id ?? 0}"> ${this.bookInfo.title}</a>
        </h3>
        <p>By: ${this.bookInfo.author}</p>
      </div>
    `
    bookContainer.appendChild(this.createBtnHtml())
    return bookContainer
  }

  createBtnHtml() {
    console.log(this.bookInfo)
    const container = document.createElement('div')
    container.classList.add('btn-container')
    const btn = document.createElement('button')
    if (!this.bookInfo.isFavorite) {
        btn.innerText = 'Add to ❤️'
        btn.addEventListener('click', () => this.storageService.saveBook(this.bookInfo))
    } else {
        btn.innerText = 'remove from 💔'
        btn.addEventListener('click', () => this.storageService.removeSavedBook(this.bookInfo))
    }
    container.appendChild(btn)
    return container
  }

}