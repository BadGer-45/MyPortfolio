import email from "../assets/email.png"
import facebook from "../assets/facebook.webp"

export default function Contact() {
  return (
    <div className="contactWrapper">
      <h2 className="contactTitle">Contact</h2>

      <div className="contactCard">

        <div className="contactRow">
          <img src={email} alt="Email Icon" className="contact-icon" />
          <a href="mailto:badger0914@gmail.com" className="contactLink">
            badger0914@gmail.com
          </a>
        </div>

        <div className="contactRow">
          <img src={facebook} alt="Facebook Icon" className="contact-icon" />
          <a
            href="https://www.facebook.com/bad45ger/"
            target="_blank"
            className="contactLink"
          >
            Gercel Badilla
          </a>
        </div>

      </div>
    </div>
  );
}
