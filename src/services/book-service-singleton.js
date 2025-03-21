


class BookService {

  static BASE_URL = 'https://gutendex.com/books/' 
  static instance;

  constructor(currentPage=1) {
    if (BookService.instance) return BookService.instance
    this.currentPage = currentPage
    BookService.instance = this
  }

  fetchData(url) {
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
  }

  getBooksByPage(){
    console.log(this.currentPage)
    const url = BookService.BASE_URL +'?page=' + this.currentPage
    return this.fetchData(url)
  }

  getBookById(id){
    return fetch(BookService.BASE_URL + '/' + id)
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

  searchUserQuery(searchQuery, topicQuery) {
    const url = BookService.BASE_URL + `?search=${searchQuery}&topic=${topicQuery}`
    return this.fetchData(url)
  }
}

const singletonBookService =  new BookService()
console.log(BookService._instance)
export default singletonBookService