import { Header } from '/src/components/Header'
import { Home } from './pages/home/Home'
import '/src/App.css'

export const App = () => {
  return (
    <div>
      <Header />
      
      <Home />
    </div>
  )
}
