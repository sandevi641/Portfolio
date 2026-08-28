import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Get In Touch"
          title="Let's Connect"
          subtitle="Interested in working together, discussing an internship opportunity, or learning more about my technical background? Feel free to reach out."
        />

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            gridTemplateColumns: 1fr 1.25fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
