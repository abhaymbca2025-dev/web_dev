import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const validateForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <header>
        <h1>Abhay Meena</h1>
        <p>BCA Student | Future IT Entrepreneur</p>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">

        <section id="about">
          <h2>About Me</h2>
          <p>
            My name is Abhay Meena. I am a BCA 1st year student.
          </p>
          <p>
            I also have 6 months experience working in a Government Emergency Health Department.
          </p>
          <p>
            My goal is to start my own IT company startup in the near future.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JFrame</li>
            <li>JSwing</li>
          </ul>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p>6 Months Work Experience</p>
          <p>Government Emergency Health Department</p>
        </section>

        <section id="contact">
          <h2>Contact Form</h2>

          <form onSubmit={validateForm}>
            <label>Name:</label><br />
            <input type="text" name="name" /><br /><br />

            <label>Email:</label><br />
            <input type="email" name="email" /><br /><br />

            <label>Message:</label><br />
            <textarea name="message"></textarea><br /><br />

            <input type="submit" value="Send Message" />
          </form>
        </section>

      </div>

      <footer>
        <p>© 2026 Abhay Meena</p>
      </footer>

    </div>
  );
}

export default App;
