import React from 'react'
import styles from './Contactform.module.css'
import Button from '../Button/Button'


function Contactform() {
  return (
  <section className={styles.container}> 

  <div className={styles.contact_form}>
    
    <form action='https://getform.io/f/zaxddzka' method='POST'> 
    
    <div className={styles.form_control}>
    <label htmlFor="name">Name</label>
    <input type="text" name='name' placeholder='Enter Your Name' required />
    </div>

    <div className={styles.form_control}>
    <label htmlFor="mail">Email</label>
    <input type="email" name='email' placeholder='Enter Your Email Address' required/>
    </div>

    <div className={styles.form_control}>
    <label htmlFor='text'>Text</label>
    <textarea name="text" id="text" required placeholder='Enter Your Message' rows="6"/>
    </div>

    <div style={{
      display: "flex",
      justifyContent: "end",
    }
    }>
    <Button  text="SUBMIT" />
    </div>
    
    </form>

  </div>

  <div className={styles.contact_image}>
    <img src="./images/contact.png" />
  </div>

  </section>
  )
}

export default Contactform