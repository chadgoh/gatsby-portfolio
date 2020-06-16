import React from "react"

import styled from "styled-components"

const ContactPage = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;

  .contact-form {
    background: #f8f8f8;
    border-radius: 0.25rem;
    text-align: center;
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); */
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;

    :hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    h3 {
      padding-top: 1.25rem;
      color: var(--clr-primary-2);
    }
    .form-group {
      padding: 1rem 1.5rem;

      textarea {
        resize: vertical;
      }

      .form-control {
        margin: 1.25rem auto;
        display: block;
        width: 90%;
        padding: 0.75rem 1rem;
        border: none;
        background: var(--clr-primary-6);
        border-radius: 0.25rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;

        ::placeholder {
          font-family: Ubuntu Mono;
          color: var(--clr-primary-1);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
        }
      }
    }
    .submit-btn {
      display: block;
      width: 100%;
      padding: 1rem;
      margin: auto auto;
      border-bottom-left-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }
`

const Contact = () => {
  return (
    <section>
      <ContactPage className="contact-page">
        <article className="contact-form">
          <h3>Let's get in touch!</h3>
          <form action="https://formspree.io/xdowzjpz" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
          </form>
        </article>
      </ContactPage>
    </section>
  )
}

export default Contact
