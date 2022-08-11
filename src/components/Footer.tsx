
export function Footer({messages, setMessages}){
    return(
        <div className='footer'>
        <div className='footer-container'>
          <div className='footer-container-left'>
            <h1>Contact us</h1>
            <div className='footer-contact-us'>
              <ul>
                <li>Email:edona.jemini12@gmail.com</li>
                <li>Phone:8472-23-343</li>
              </ul>
            </div>
          </div>
          <div className='footer-container-right' >
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
        </div>
        <div>
            <div className='message-input'>
          <div className='show-message'>
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