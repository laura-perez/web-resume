import { useState } from 'react'
import './styles/index.css'
import Profile from './components/Profile'
import Feed from './components/Feed'
import ChatBox from './components/ChatBox'

/**
 * Main App Component
 * 
 * Structure:
 * - .instagram-container: Main container with relative positioning for ChatBox overlay
 * - Profile: Header section with user info and "Message" button
 * - Feed: Posts grid section
 * - ChatBox: Overlay positioned at bottom-right of app container
 */

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="instagram-container">
      <Profile onOpenChat={() => setIsChatOpen(true)} />
      <Feed />
      
      {/* ChatBox positioned fixed relative to viewport, always visible */}
      <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

export default App
