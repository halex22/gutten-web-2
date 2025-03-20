export default class BookCardComponent {
  constructor(bookInfo){
    this.bookInfo = bookInfo
  }

  createBookCardHtml() {
    const bookContainer = document.createElement('div')
    bookContainer.classList.add('book-container')
    bookContainer.innerHTML =  `

      <div class="img-container">
        <img src="${this.bookInfo.imgUrl}" alt="">
      </div>
      <div class="book-info">
        <h3>
        <a href="/detail.html?id=${this.bookInfo.id ?? 0}"> ${this.bookInfo.title}</a>
        </h3>
        <p>By: ${this.bookInfo.author}</p>
      </div>
      <div class="btn-container">
        <button class="btn ">Add to ❤️</button>
        <button class="btn">remove from 💔</button>
      </div>

    `
    return bookContainer
  }
}