import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError(null);

    // Replace this with your API call
    console.log("Form submitted:", formData);

    // Reset form or show confirmation
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5 text-muted">
          We'd love to hear from you! Fill out the form below and we’ll get back to you.
        </p>

        {submitted && (
          <div className="alert alert-success text-center">
            Thank you! Your message has been sent.
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 600 }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message*
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
