import { useState } from "react";
import "./style.css";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add custom submit or API logic here
  };

  return (
    <div className="portfolio-container">
      <nav>
        <ul>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About me
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact me
            </a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome to My Portfolio!</h1>
      </section>

      <section id="about">
        <h2>About me</h2>
        <p>
          Hello! I am Prince Dwayne C. Bautista, a 20-year-old Computer
          Engineering student at the Technological Institute of the Philippines
          (T.I.P.). I am passionate about hardware prototyping, digital logic
          design, network engineering, and software development. Driven by
          problem-solving and innovation, I focus on building efficient,
          real-world technical solutions that bridge the gap between hardware
          systems and software applications[cite: 1].
        </p>
      </section>

      <section id="contact">
        <h2>Contact me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/prince-dwayne-c-bautista-79b8a920b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prince-dwayne-c-bautista"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
