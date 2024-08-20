import styles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <h1 className={styles.contact}>Contact Us</h1>
      <p className={styles.call}>Feel free to reach out to us at myrecipe@gmail.com.</p>
    </div>
  );
}

export default Contact;
