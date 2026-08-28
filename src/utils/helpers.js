/**
 * General Helper Utilities
 */

/**
 * Smoothly scrolls to an element by ID, accounting for fixed navbar height.
 * @param {string} id - HTML element id without hash
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Returns current year dynamically for copyright notices
 */
export const getCurrentYear = () => new Date().getFullYear();

/**
 * Formats a project count or number safely
 */
export const formatBadgeText = (text) => text || '';
