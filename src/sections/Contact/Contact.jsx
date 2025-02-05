import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./ContactStyle.module.css";

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Aktifkan loading state

    const formData = new FormData(event.target);
    formData.append("access_key", "2cb99820-160d-47f9-83e2-ac7654ee5871");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json(); // Parsing JSON secara terpisah

      if (result.success) {
        toast.success("Message sent successfully!");
        event.target.reset(); // Kosongkan form setelah sukses
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false); // Matikan loading state setelah selesai
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGrup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGrup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGrup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input
          className="hover btn"
          type="submit"
          value={loading ? "Sending..." : "Submit"}
          disabled={loading}
        />
      </form>
    </section>
  );
}

export default Contact;
