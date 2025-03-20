export default class BookService {

  static BASE_URL = 'https://gutendex.com/books/' 

  constructor(currentPage=1) {
    this.currentPage = currentPage
    
  }

  getBooksByPage(){
    const url = BookService.BASE_URL +'?page=' + this.currentPage
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
  }

  getBookById(id){
    // const url = 
  }


  getNextPage(){
    // controllare che non sia minore di zero 
    this.currentPage++
    return this.getBooksByPage()
  }

  getPrevPage(){
    // controllare che non sia > ultima pagina
    this.currentPage --
    return this.getBooksByPage()
  }

}

