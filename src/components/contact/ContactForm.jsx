import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { validateContactForm } from '../../utils/validation';
import Button from '../common/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error upon typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate Form
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      /**
       * Note: Connect your preferred email provider API here (e.g. EmailJS, Formspree, Resend, or custom backend).
       * Example:
       * await emailjs.send('service_id', 'template_id', formData, 'public_key');
       */
      await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulated network transmission

      setStatus('success');
      setStatusMessage('Thank you! Your message has been prepared/sent successfully. I will get back to you promptly.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 6000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setStatusMessage('Something went wrong transmitting your message. Please reach out directly via email.');
    }
  };

  return (
    <div
      className="card-base"
      style={{
        padding: '2rem',
        backgroundColor: 'var(--color-surface-card)',
      }}
    >
      <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Full Name Input */}
        <div>
          <label
            htmlFor="contact-name"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '0.4rem',
            }}
          >
            Full Name <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: errors.name ? '1px solid var(--color-danger)' : '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              outline: 'none',
              transition: 'border-color var(--transition-fast)',
            }}
          />
          {errors.name && (
            <span style={{ fontSize: '0.8rem', color: 'var(--color-danger)', marginTop: '0.3rem', display: 'block' }}>
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Address Input */}
        <div>
          <label
            htmlFor="contact-email"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '0.4rem',
            }}
          >
            Email Address <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="jane.doe@company.com"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: errors.email ? '1px solid var(--color-danger)' : '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              outline: 'none',
              transition: 'border-color var(--transition-fast)',
            }}
          />
          {errors.email && (
            <span style={{ fontSize: '0.8rem', color: 'var(--color-danger)', marginTop: '0.3rem', display: 'block' }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Subject Input */}
        <div>
          <label
            htmlFor="contact-subject"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '0.4rem',
            }}
          >
            Subject <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="Internship Opportunity / Project Collaboration"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: errors.subject ? '1px solid var(--color-danger)' : '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              outline: 'none',
              transition: 'border-color var(--transition-fast)',
            }}
          />
          {errors.subject && (
            <span style={{ fontSize: '0.8rem', color: 'var(--color-danger)', marginTop: '0.3rem', display: 'block' }}>
              {errors.subject}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="contact-message"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '0.4rem',
            }}
          >
            Message <span style={{ color: 'var(--color-danger)' }}>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Hello! We are interested in your profile for our software engineering internship..."
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: errors.message ? '1px solid var(--color-danger)' : '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color var(--transition-fast)',
            }}
          />
          {errors.message && (
            <span style={{ fontSize: '0.8rem', color: 'var(--color-danger)', marginTop: '0.3rem', display: 'block' }}>
              {errors.message}
            </span>
          )}
        </div>

        {/* Feedback Alert */}
        {statusMessage && (
          <div
            style={{
              padding: '0.85rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: status === 'success' ? 'var(--color-success-bg)' : 'var(--color-danger-bg)',
              color: status === 'success' ? 'var(--color-success)' : 'var(--color-danger)',
              border: `1px solid ${status === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
            }}
          >
            {status === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'sending'}
          icon={status === 'sending' ? Loader2 : Send}
          iconPosition="right"
          style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
        >
          {status === 'sending' ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
