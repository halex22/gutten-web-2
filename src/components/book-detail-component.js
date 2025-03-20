import BookService from "../services/book-service";
import StorageService from "../services/storage-service";

export default class BookDetailComponent {
  
  /**
   * 
   * @param {BookService} bookInfo 
   * @param {StorageService} storageService 
   */
  constructor(bookInfo, storageService) {
    this.storageService = storageService
    this.bookInfo = bookInfo;
  }

  createBookHtml() {
    const bookContainer = document.getElementById('detail-root')
    bookContainer.innerHTML = `
      <div class="img-detail-container">
        <img src="${this.bookInfo.formats['image/jpeg']}" alt="">
      </div>

      <div class="detail-book-info">
        <h2>${this.bookInfo.title}</h2>

        ${this.createListDiv('authors', this.bookInfo.authors)}

        <summary>
          ${this.bookInfo.summaries[0]}
        </summary>

        ${this.createListDiv('subjects', this.bookInfo.subjects)}

        ${this.createListDiv('Languages', this.bookInfo.languages)}
      </div>
    
    `
  }



  createListDiv(title, elements) {
    return `
    <div>
      <h4 class="list-name">${title}</h4>
      <ul class="subject-list">
        ${elements.reduce((a, c) => a+= `<li class="subject-item">${c.name ?? c}</li>\n`, '')}
      </ul>
    </div>
    `;
  }


}
