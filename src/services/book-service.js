export default class BookService {

  static BASE_URL = 'https://gutendex.com/books/' 

  constructor(currentPage=1) {
    this.currentPage = currentPage
  }

  fetchData(url) {
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
  }

  getBooksByPage(){
    const url = BookService.BASE_URL +'?page=' + this.currentPage
    return this.fetchData(url)
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

  searchUserQuery(searchQuery, topicQuery) {
    const url = BookService.BASE_URL + `?search=${searchQuery}&topic=${topicQuery}`
    return this.fetchData(url)
  }
  

}

