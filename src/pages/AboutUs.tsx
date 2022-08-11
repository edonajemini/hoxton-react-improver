export function AboutUs() {
    return(
        <div>
            <div className='review-input'>
          <h3>Our Client's messages</h3>
          <div className='show-review'>
          <ul>
              {messages.map(item => (
                <li className='review-li'>
                  <p>{item.messages}</p>
                  <h3>-{item.email}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
    )
}