


class BookService {

  static BASE_URL = 'https://gutendex.com/books/' 

  constructor(currentPage=1) {
    if (BookService.instance) return BookService.instance
    this.currentPage = currentPage
    BookService.instance = this
  }

  getBooksByPage(){
    console.log(this.currentPage)
    const url = BookService.BASE_URL +'?page=' + this.currentPage
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
  }

  getBookById(id){
    return fetch(BookService.BASE_URL + id)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
  }


  getNextPage(){
    this.currentPage++
    return this.getBooksByPage()
  }

  getPrevPage(){
    this.currentPage --
    return this.getBooksByPage()
  }

}

const singletonBookService =  new BookService()
console.log(BookService._instance)
export default singletonBookService