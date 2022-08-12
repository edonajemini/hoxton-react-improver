import { useState } from 'react'
export function AboutUs() {
    const [messages, setMessages] = useState([])
    return(
        <div>
          <div className='about-container-right' >
            <h2>Contact Us here!🌸</h2>
            <form onSubmit={event => {
              event.preventDefault()

              let answer = {
                messages: event.target.text.value,
                email: event.target.email.value
              }
              setMessages([...messages, answer])
            }}>
              <input type="email" name='email' className='message-mail' />
              <textarea name="text" id="costumer-message" rows={5}>
              </textarea>
              <button>
                Submit
              </button>
            </form>
          </div>  
          <div>
            <div className='message-input'>
          <div className='show-message'>
            <h2>Our client messages</h2>
          <ul>
              {messages.map(item => (
                <li className='message-li'>
                  <p>{item.messages}</p>
                  <h3>-{item.email}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
    )
}