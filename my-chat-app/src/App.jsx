import { useState } from 'react'
import './App.css' // Imports the styles we just set up

function App() {
  // 1. Our messages array state
  const [messages, setMessages] = useState([
    { type: "r", message: "How was your day?" },
    { type: "r", message: "My day was pretty good." }
  ])
  
  // 2. State to track exactly what the user types in real-time
  const [inputValue, setInputValue] = useState("")

  // 3. Action function to add a message
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      // In React, we use the setter function and pass a BRAND NEW array.
      // [...messages] copies all old items, then we add the new object at the end.
      setMessages([...messages, { type: "s", message: inputValue }])
      setInputValue("") // Clears the input box automatically
    }
  }

  // 4. Handle Enter key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="chat-screen">
      
      {/* The Message Feed Container */}
      <div className="message-feed">
        {messages.map((item, index) => (
          <p 
            key={index} 
            id={item.type === "r" ? "receive" : "send"} 
            className="message-card"
          >
            {item.message}
          </p>
        ))}
      </div>

      {/* The Action Input Bar */}
      <div className="input-box">
        <input 
          className="chat-input" 
          type="text" 
          placeholder="Send Text"
          value={inputValue} // Ties the input element to our React state
          onChange={(e) => setInputValue(e.target.value)} // Updates state as you type
          onKeyDown={handleKeyDown} // Listens for Enter key
        />
        <button className="send-btn" onClick={handleSendMessage}>➔</button>
      </div>

    </div>
  )
}

export default Ap