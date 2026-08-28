import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../../data/portfolio';

/**
 * Reusable SocialLinks component for Hero, Contact, Footer
 */
export const SocialLinks = ({ className = '', iconSize = 18 }) => {
  const { social } = portfolioData;

  const links = [
    {
      name: 'GitHub',
      url: social.github,
      icon: GithubIcon,
      show: Boolean(social.github),
    },
    {
      name: 'LinkedIn',
      url: social.linkedin,
      icon: LinkedinIcon,
      show: Boolean(social.linkedin),
    },
    {
      name: 'Email',
      url: social.email.startsWith('mailto:') ? social.email : `mailto:${social.email}`,
      icon: Mail,
      show: Boolean(social.email),
    },
    {
      name: 'Twitter / X',
      url: social.twitter,
      icon: TwitterIcon,
      show: Boolean(social.twitter),
    },
  ];

  return (
    <div className={`social-links-container ${className}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      {links
        .filter((item) => item.show)
        .map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target={item.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label={item.name}
              title={item.name}
            >
              <Icon size={iconSize} />
            </a>
          );
        })}
    </div>
  );
};

export default SocialLinks;
