import {AppRouter} from './routes/AppRouter'
import Header from './components/Header'
import { BooksProvider } from './components/BooksContext';

export const App = () => {
  return (
    <>
      <BooksProvider>
        <Header/>
        <AppRouter />
      </BooksProvider>

    </>
  )
}
