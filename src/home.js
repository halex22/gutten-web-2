import './style.css'
import BookService from './services/book-service'
import HomePageComponent from './components/home-page-component'

const bookService = new BookService()
const homeComponent = new HomePageComponent(bookService)

homeComponent.start()





