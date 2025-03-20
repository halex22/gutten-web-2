import './style.css'
import DetailPageComponent from './components/detail-page-component'
import StorageService from './services/storage-service'
import BookService from './services/book-service'


const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const storageService = new StorageService()
const bookService = new BookService()

const detailPage = new DetailPageComponent(bookService, storageService, id)
detailPage.start()