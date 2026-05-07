import React, { useState } from 'react';
import { motion } from 'framer-motion';

/*
  Contact Section Component
  Provides a contact form UI (frontend only - no backend submission)
  Includes form validation and smooth animations
*/
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only form - no backend submission as per requirements
    alert('Thank you for your message! (This is a UI demo - no data is sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-xl">
      <div className="container">
        <motion.div
          className="text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-md" style={{ color: 'var(--text-primary)' }}>
            Contact Us
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Have questions about the Weather Risk Dashboard? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            className="glass-card p-xl"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-lg">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-md py-sm rounded-md border text-primary"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-md py-sm rounded-md border text-primary"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-lg">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-md py-sm rounded-md border text-primary resize-vertical"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-primary)'
                }}
                placeholder="Your message or question..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;