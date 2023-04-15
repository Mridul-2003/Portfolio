import'./index.scss';

const Contact = ()=>{
   
  return(
    <>
    
      <div className="contact-container">
      <h1>Feel Free to Contact Me.</h1>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqwpplg"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="Description"
              required></textarea>

            <input className="submit" type="submit" value="send" />
          </form>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.324310349015!2d77.22716957469429!3d28.65000658328846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd182db915a3%3A0x42e3ba31f424c7bb!2sGali%20Raja%20Kedar%20Nath%2C%20Raghu%20Ganj%2C%20Manohar%20Market%2C%20Hauz%20Qazi%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1681382181780!5m2!1sen!2sin"
         width="600" height="410" 
         style={{border:0}}
         allowfullscreen="" 
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade">

         </iframe>
        </div>
      </div>
      </>
  );
};
export default Contact;