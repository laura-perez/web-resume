import './styles/index.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Feed from './components/Feed'

function App() {
  return (
    <div className="instagram-container">
      <Header />
      <Profile />
      <Feed />
    </div>
  )
}

export default App
