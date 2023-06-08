import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
const vercelToken = process.env.VERCEL_TOKEN; //Replace with your token
const apiEndPt = 'https://nextjs-hjwfsc1pk-naushadansarinitw.vercel.app/api/contact';
 
const Contact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleClick = (e) => {
    setData({...data , [e.target.name]: e.target.value});
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
      try {
        const response = await fetch(apiEndPt,{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + vercelToken,
          },
          body: JSON.stringify({...data}),
        });

        const responseData = await response.json();
        console.log(responseData);
        alert("Thanks for contacting");
        navigate('/');
      } catch (error) {
        alert("Something went wrong");
      }finally {
        setData({name: "", email: "", message: ""});
      }
    }
  

  return (
    <section id="contact" className={`${classes.contact} flex m5` }>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <a href="mailto:piyushgarg.dev@gmail.com">
                    <i className="ri-mail-line"></i>
                  </a>
                </span>
                <p>
                  <a href="mailto:piyushgarg.dev@gmail.com">piyushgarg.dev@gmail.com</a>
                </p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link
                aria-label="Youtube Channel"
                href="https://youtube.com/@piyushgargdev"
                target="_blank"
              >
                <i className="ri-youtube-line"></i>
              </Link>
              <Link
                aria-label="Github Profile"
                href="https://github.com/piyushgarg-dev"
                target="_blank"
              >
                <i className="ri-github-line"></i>
              </Link>
              <Link
                aria-label="Twitter Account"
                href="https://twitter.com/piyushgarg_dev"
                target="_blank"
              >
                <i className="ri-twitter-line"></i>
              </Link>
              <Link
                aria-label="LinedIn Account"
                href="https://www.linkedin.com/in/piyushgarg195/"
                target="_blank"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                className="border border-grazy-300 bg-transparent px-4 py-2 rounded-md     focus:outline-none focus:ring-2 focus:rgba(77, 181, 255, 0.4) text-white"
                type="text"
                name="name"
                value={data.name}
                placeholder="Your Full Name"
                onChange={handleClick}
                required
                autoComplete="off"
              />
              <input
                className="border border-gray-300 bg-transparent px-4 py-2 rounded-md     focus:outline-none focus:ring-2 focus:[rgba(77, 181, 255, 0.4)] text-white"
                type="email"
                name="email"
                value={data.email}
                placeholder="Your Email"
                onChange={handleClick}
                required
                autoComplete="off"
              />
              <textarea
                className="border border-gray-300 bg-transparent px-4 py-2 rounded-md     focus:outline-none focus:ring-2 focus:rgba(77, 181, 255, 0.4) text-white"
                name="message"
                value={data.message}
                placeholder="Your Message"
                onChange={handleClick}
                required
                rows="4"
                autoComplete="off"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-50"
              >
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
