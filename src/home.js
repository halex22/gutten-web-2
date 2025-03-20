import './style.css'
import BookService from './services/book-service'
import HomePageComponent from './components/home-page-component'
import StorageService from './services/storage-service'

const bookService = new BookService()
const storageService = new StorageService()
const homeComponent = new HomePageComponent(bookService, storageService)


homeComponent.start()





