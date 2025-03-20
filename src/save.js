import './style.css'
import SavePageComponent from './components/save-page-components'
import BookService from './services/book-service'
import StorageService from './services/storage-service'

const bookService = new BookService()
const storageService = new StorageService()


const saveComponent = new SavePageComponent(bookService, storageService)

saveComponent.start()