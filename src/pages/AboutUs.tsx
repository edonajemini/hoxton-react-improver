import { useState, useEffect } from 'react'
export function AboutUs() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
      fetch("http://localhost:4000/messages")
        .then((resp) => resp.json())
        .then((messagesFromServer) => setMessages(messagesFromServer));
    }, []);
    return(
        <div>
          <div className='about-container-right' >
            <h2>Leave a message!🌸</h2>
            <form onSubmit={event => {
              event.preventDefault()

              let answer = {
                messages: event.target.text.value,
                email: event.target.email.value,
                emoji: event.target.emoji.value
              }
              event.target.reset();
              
              setMessages([...messages, answer])
            }}>
              <input type="email" name='email' className='message-mail' placeholder='Please enter your email!' required />
              <textarea name="text" id="costumer-message" rows={5} placeholder="Leave your message here!" required>
              </textarea>
              <ul className='emoji-input'>
                <li>
              <input
                  id="emoji-1"
                  type="radio"
                  name="emoji"
                  required
                  value=" 😍 " />
                <label htmlFor="emoji-1"> 😍 </label>
                </li>
                <li>
                <input
                  id="emoji-2"
                  type="radio"
                  name="emoji"
                  required
                  value=" 🙂 " />
                <label  htmlFor="emoji-2"> 🙂 </label>
              </li>
              <li>
                <input
                  id="emoji-3"
                  type="radio"
                  name="emoji"
                  required
                  value=" 😐 " />
                <label htmlFor="emoji-3"> 😐 </label>
              </li>
              <li>
                <input
                  id="emoji-4"
                  type="radio"
                  name="emoji"
                  required
                  value=" 😒 " />
                <label htmlFor="emoji-4"> 😒 </label>
              </li>
                </ul>
              <button className='message-submit-btn'>
                Submit
              </button>
            </form>
          </div>  
          <div>
            <div className='message-input'>
          <div className='show-message'>
            <h2>Our client messages!</h2>
          <ul>
              {messages.map(item => (
                <li className='message-li'>
                  <p>{item.messages}</p>
                  <h3>-{item.email}</h3>
                  <li>{item.emoji}</li>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
    )
}