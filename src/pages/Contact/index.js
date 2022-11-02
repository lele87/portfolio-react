import { useRef } from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import Navbar from '../../components/Navbar'
import './index.scss'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const blankFields = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const [formData, setFormData] = useState(blankFields)
  const refForm = useRef()

  const successNotify = () =>
    toast.success('Message successfully sent!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  const changeData = (event) => {
    setFormData(event.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'contact_service',
        'template_u2rlvdi',
        refForm.current,
        'bO5ZsRHmWVklmuoL9'
      )
      .then(
        () => {
          successNotify()
          setFormData(blankFields)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <Navbar />
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c ', 't', '', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            Get in touch <br /> Let's create something together!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} autoComplete="off">
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={changeData}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeData}
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={changeData}
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={changeData}
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="submit-button" value="SEND" />
                </li>
              </ul>
            </form>
            <div className="link--container">
              <ul>
                <li className="link_icon">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/emanuele-panesi-frontend-developer/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                  </a>
                </li>
                <li className="link_icon">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/lele87"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#fff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
